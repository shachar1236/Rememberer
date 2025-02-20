<script lang="ts">
	import P5 from "../lib/P5.svelte";
    import type p5 from 'p5';
    import { shuffle, randomInt, randomFloat } from "../helpers/functions.js"
    import { QuestionPool } from "../helpers/questions_pool";
    import { max_score, Question } from "../helpers/question";
    import buzz from "buzz";
    import { Howl } from "howler";
    import { firebase_app, isOnMobile, page, user } from "../shared/shared";
    import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";

    var song = new Howl({
        src: ['./assets/sounds/song.wav'],
        loop: true,
        volume: 0.1,
    });

    export let question_set;

    const MAX_QUESTIONS_NUMBER = 4;
    const MOV_RATE = 0.03;
    const RAND_RATE = 0.1;
    const ANSWER_IMAGE_WINDOWS_RATIO = 0.4;
    const ANSWER_IMAGE_SPEED = 15;
    const ANSWER_IMAGE_TIME = 0.8;
    const WRONG_ANSWER_FLICKERING_TIME = 1000; // millis

    let answer_text_size = 50;
    let question_text_size = 20;
    let box_size = 150;

    if ($isOnMobile) {
        answer_text_size *= 0.6;
        question_text_size *= 0.6;
        box_size *= 0.6;
    }
    
    const ANSWER_TEXT_SIZE = answer_text_size;
    const QUESTION_TEXT_SIZE = question_text_size;
    const BOX_SIZE = box_size;

    const FIRST_QUESTIONS_NUM = 5;

    function returnToMainPage() {
        song.stop();
        $page = "main";
    } 

    let answersSCREENXY = [];

    question_set.questions = shuffle(JSON.parse(JSON.stringify(question_set.questions)));

    let pool = new QuestionPool();

    let current_question;
    let current_answers = [];

    let current_question_pos = {
        x: 0,
        y: 0,
    };

    function enforceRTL(text) {
    // Unicode ranges for Hebrew, Arabic, and other RTL scripts
    const rtlRegex = /[\u0590-\u08FF]/;
    
    // Check if the text contains any RTL characters
    if (rtlRegex.test(text)) {
        // Ensure that symbols at the start or end don't interfere with RTL flow
        // Add \u200F at the beginning and at the end for proper positioning
        text = `\u200F${text}`; // Add RLM at the start
        
        // Handle symbol at the end of the text (keep it at the rightmost)
        if (/[^\w\u0590-\u08FF]$/.test(text)) {
        text = `${text}\u200F`; // Add RLM at the end
        }
    }

    // Return the modified or original text
    return text;
    }

    function setNewQuestion() {
        let avg = pool.GetAverageScore();
        if (avg > max_score / 2.0) {
            let newQ = question_set.questions.pop();
            if (newQ) {
                current_question = pool.AddToPool(newQ);
            } else {
                if (pool.GetAverageScore() > max_score * 0.9) {
                    // TODO: end game
                }
                current_question = pool.GetRandomQuestion();
            }
        } else {
            current_question = pool.GetRandomQuestion();
        }
    
        current_question.wrong_answers = shuffle(current_question.wrong_answers)
    
        current_answers = [];
        current_answers.push({
            answer: current_question.answer,
            x: 0,
            y: 0,
            target_y: 0,
            target_x: 0,
        })
        current_question.wrong_answers.forEach(answer => {
            if (current_answers.length < MAX_QUESTIONS_NUMBER) {
                current_answers.push({
                    answer: answer,
                    x: 0,
                    y: 0,
                    target_y: 0,
                    target_x: 0,
                })
            }
        });

        current_answers = shuffle(current_answers)

        setCurrentAnswersXY();

    }

    function setCurrentAnswersXY() {
        if (current_answers.length > MAX_QUESTIONS_NUMBER || current_answers.length < 2) {
            alert("Answers length is not good")
        } 
        for (let i = 0; i < current_answers.length; i++) {
            let x = answersSCREENXY[i].x;
            let y = answersSCREENXY[i].y;
            current_answers[i].target_x = x;
            current_answers[i].target_y = y;
            current_answers[i].x = randomFloat(x * (1 - RAND_RATE), x * (1 + RAND_RATE));
            current_answers[i].y = randomFloat(y * (1 - RAND_RATE), y * (1 + RAND_RATE));
        }
    }

    let middleX, middleY;

    var sound_correct = new Howl({
        src: ['./assets/sounds/correct_v2.mp3'],
        volume: 0.5,
    });
    var sound_wrong = new Howl({
        src: ['./assets/sounds/wrong_v2.mp3'],
        volume: 0.5,
    });

    if (question_set.config.music) {

    
        song.play();
    }

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore($firebase_app);

    async function updateDB() {
        if ($user) {
            for (const question of pool.questions) {
                try {
                    const docRef = await setDoc(doc(db, "game_scores", $user.uid.toString(), question_set.name, question.id.toString()), {
                        score: question.score
                    });
    
                    console.log("Document written with ID: ", question.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
        }
    }

    async function getQuestionsScore(): Promise<void> {
        if ($user) {
            const q_doc = collection(db, "game_scores", $user.uid.toString(), question_set.name);
            const q = query(q_doc, where("score", ">", 0));
            const result = await getDocs(q);

            result.forEach((doc) => {
                console.log(`doc data =>`, doc.data());

                let index = question_set.questions.findIndex((q) => q.id == doc.id);
                if (index >= 0) {
                    let question = question_set.questions[index];
                    question_set.questions.splice(index, 1);
                    let pool_q = pool.AddToPool(question);
                    pool_q.score = doc.data().score;
                }

            });

            console.log("Pool: ", pool);
            
        }
    }

    let questions_are_ready = false;

    getQuestionsScore().then(() => {
        if (pool.questions.length < FIRST_QUESTIONS_NUM) {
            for (let i = 0; i < FIRST_QUESTIONS_NUM - pool.questions.length; i++) {
                pool.AddToPool(question_set.questions.pop());
            }
        }
        questions_are_ready = true;
    })

    const sketch = (p5: p5) => {

            let choosen_answer = null;
            let choosen_answer_last_time = 0;
            let isCorrectAnswer = false;
            let answer_image = null;
            let answer_image_pos = {
                x: p5.windowWidth / 2,
                y: p5.windowHeight * 2,
            };
            let answer_image_timer = 0;

            let processAnswers = () => {
                for (let i = 0; i < current_answers.length; i++) {
                    let x_diff = current_answers[i].target_x - current_answers[i].x;
                    let y_diff = current_answers[i].target_y - current_answers[i].y;
                    if (!choosen_answer) {
                        if (Math.abs(x_diff) < MOV_RATE && Math.abs(y_diff) < MOV_RATE) {
                            // console.log("Changing target")
                            current_answers[i].target_x *= randomFloat(1 - RAND_RATE, 1 + RAND_RATE);
                            if (current_answers[i].target_x > answersSCREENXY[i].x * (RAND_RATE + 1)) {
                                current_answers[i].target_x = answersSCREENXY[i].x * (1 - RAND_RATE)
                            }
                            if (current_answers[i].target_x < answersSCREENXY[i].x * (1 - RAND_RATE)) {
                                current_answers[i].target_x = answersSCREENXY[i].x + (RAND_RATE + 1)
                            }
                            current_answers[i].target_y *= randomFloat(1 - RAND_RATE, 1 + RAND_RATE);
                            if (current_answers[i].target_y > answersSCREENXY[i].y * (RAND_RATE + 1)) {
                                current_answers[i].target_y = answersSCREENXY[i].y * (1 - RAND_RATE)
                            }
                            if (current_answers[i].target_y < answersSCREENXY[i].y * (1 - RAND_RATE)) {
                                current_answers[i].target_y = answersSCREENXY[i].y + (RAND_RATE + 1)
                            }
                        }
    
                        current_answers[i].x += x_diff * MOV_RATE;
                        current_answers[i].y += y_diff * MOV_RATE;
                    }

                    p5.textSize(ANSWER_TEXT_SIZE);
                    p5.textAlign(p5.CENTER);
                    let time_since = Date.now() - choosen_answer_last_time;
                    if (choosen_answer && current_answers[i].answer == current_question.answer && time_since % WRONG_ANSWER_FLICKERING_TIME < WRONG_ANSWER_FLICKERING_TIME / 2) {
                        p5.fill(23, 190, 187);
                    } else {
                        p5.fill(118, 176, 65);
                    }
                    let txt = enforceRTL(current_answers[i].answer);
                    p5.text(txt, current_answers[i].x, current_answers[i].y)


                    let curr_ans = current_answers[i];
                    if (!choosen_answer) {
                        // check if colides with question
                        if (p5.dist(curr_ans.x, curr_ans.y, current_question_pos.x, current_question_pos.y) < BOX_SIZE) {
                            console.log("Colides")
                            choosen_answer = curr_ans.answer;
                            if (choosen_answer == current_question.answer) {
                                sound_correct.play();
                                isCorrectAnswer = true;
                                answer_image = p5.loadImage("./assets/images/tick.png")
                            } else {
                                sound_wrong.play()
                                choosen_answer_last_time = Date.now();
                                answer_image = p5.loadImage("./assets/images/Red_X.png")
                            }
                        }
                    }
                }
            }

            let setupNextRound = () => {
                updateDB();
                
                setNewQuestion();
                current_question_pos = {
                    x: middleX,
                    y: middleY,
                };
                choosen_answer = null;
                answer_image_timer = ANSWER_IMAGE_TIME;
                answer_image_pos = {
                    x: p5.windowWidth / 2,
                    y: p5.windowHeight * 2,
                };
                isCorrectAnswer = false;
                choosen_answer_last_time = 0;
            }
 
            p5.setup = () => {
                middleX = p5.windowWidth / 2;
                middleY = p5.windowHeight / 2;
                current_question_pos.x = middleX;
                current_question_pos.y = middleY;
                p5.createCanvas(p5.windowWidth, p5.windowHeight);
                for (let i = -1; i < 2; i += 2) {
                    for (let j = -1; j < 2; j += 2) {
                        answersSCREENXY.push({
                            x: p5.windowWidth * (0.5 + 0.25 * j),
                            y: p5.windowHeight * (0.5 + 0.25 * i),
                        })
                    }
                }
                setupNextRound();
            };

            p5.draw = () => {
                p5.background(46, 40, 42);
                if (choosen_answer) {
                    p5.imageMode(p5.CENTER);
                    p5.image(answer_image, answer_image_pos.x, answer_image_pos.y, p5.windowWidth * ANSWER_IMAGE_WINDOWS_RATIO, p5.windowWidth * ANSWER_IMAGE_WINDOWS_RATIO)
                    if (answer_image_pos.y > middleY) {
                        answer_image_pos.y -= ANSWER_IMAGE_SPEED;
                        answer_image_timer = Date.now()
                    } else {
                        if (Date.now() - answer_image_timer > ANSWER_IMAGE_TIME * 1000) {
                            if (isCorrectAnswer) {
                                current_question.AddScore(question_set.config.learning_rate);
                            } else {
                                current_question.RemoveScore(question_set.config.learning_rate);
                            }
                            setupNextRound();
                        }
                    }
                } 
                processAnswers();

                let txt = enforceRTL(current_question.question);
                p5.textSize(QUESTION_TEXT_SIZE);
                p5.fill(255, 201, 20);
                p5.textAlign(p5.CENTER);
                p5.textFont()
                p5.text(txt, current_question_pos.x, current_question_pos.y)

            }

            p5.mouseDragged = () => {
                if (p5.mouseX > current_question_pos.x - BOX_SIZE && p5.mouseX < current_question_pos.x + BOX_SIZE
                    && p5.mouseY > current_question_pos.y - BOX_SIZE && p5.mouseY < current_question_pos.y + BOX_SIZE) {
                    current_question_pos.x = p5.mouseX;
                    current_question_pos.y = p5.mouseY;
                }
            }
        };

    console.log("Here")
</script>

<button onclick="{returnToMainPage}" type="button" class="absolute left-[47.5%] top-1 bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    <!-- Heroicon name: outline/x -->
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
</button>
{#if  questions_are_ready}
    <P5 {sketch} />
{/if}

<style>
    :root {
        background-color: #2E282A;
    }
</style>
