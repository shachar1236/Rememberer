<script>
	import P5 from "../lib/P5.svelte";
    import { shuffle, randomInt, randomFloat } from "../helpers/functions.js"
    import { QuestionPool } from "../helpers/questions_pool";
    import { max_score, Question } from "../helpers/question";
    export let question_set;

    const QUESTIONS_NUMBER = 4;
    const MOV_RATE = 0.03;
    const RAND_RATE = 0.1;
    const ANSWER_TEXT_SIZE = 50;
    const QUESTION_TEXT_SIZE = 20;
    const BOX_SIZE = 150;
    const ANSWER_IMAGE_WINDOWS_RATIO = 0.4;
    const ANSWER_IMAGE_SPEED = 15;
    const ANSWER_IMAGE_TIME = 0.8;
    const WRONG_ANSWER_FLICKERING_TIME = 1000; // millis

    const FIRST_QUESTIONS_NUM = 5;
    let answersSCREENXY = [];

    question_set.questions = shuffle(JSON.parse(JSON.stringify(question_set.questions)));

    let pool = new QuestionPool();

    for (let i = 0; i < FIRST_QUESTIONS_NUM; i++) {
        pool.AddToPool(question_set.questions.pop());
    }

    let current_question;
    let current_answers = [];

    let current_question_pos = {
        x: 0,
        y: 0,
    };

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
            if (current_answers.length < QUESTIONS_NUMBER) {
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
        for (let i = 0; i < QUESTIONS_NUMBER; i++) {
            let x = answersSCREENXY[i].x;
            let y = answersSCREENXY[i].y;
            current_answers[i].target_x = x;
            current_answers[i].target_y = y;
            current_answers[i].x = randomFloat(x * (1 - RAND_RATE), x * (1 + RAND_RATE));
            current_answers[i].y = randomFloat(y * (1 - RAND_RATE), y * (1 + RAND_RATE));
        }
    }

    let middleX, middleY;


    const sketch = (p5) => {

            p5.choosen_answer = null;
            p5.choosen_answer_last_time = 0;
            p5.isCorrectAnswer = false;
            p5.answer_image = null;
            p5.answer_image_pos = {
                x: p5.windowWidth / 2,
                y: p5.windowHeight * 2,
            };

            p5.processAnswers = () => {
                for (let i = 0; i < QUESTIONS_NUMBER; i++) {
                    let x_diff = current_answers[i].target_x - current_answers[i].x;
                    let y_diff = current_answers[i].target_y - current_answers[i].y;
                    if (!p5.choosen_answer) {
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
                    let time_since = Date.now() - p5.choosen_answer_last_time;
                    if (p5.choosen_answer && current_answers[i].answer == current_question.answer && time_since % WRONG_ANSWER_FLICKERING_TIME < WRONG_ANSWER_FLICKERING_TIME / 2) {
                        p5.fill(23, 190, 187);
                    } else {
                        p5.fill(118, 176, 65);
                    }
                    p5.text(current_answers[i].answer, current_answers[i].x, current_answers[i].y)


                    let curr_ans = current_answers[i];
                    if (!p5.choosen_answer) {
                        // check if colides with question
                        if (p5.dist(curr_ans.x, curr_ans.y, current_question_pos.x, current_question_pos.y) < BOX_SIZE) {
                            console.log("Colides")
                            p5.choosen_answer = curr_ans.answer;
                            if (p5.choosen_answer == current_question.answer) {
                                p5.isCorrectAnswer = true;
                                p5.answer_image = p5.loadImage("https://static.vecteezy.com/system/resources/previews/017/177/781/original/green-tick-check-mark-on-transparent-background-free-png.png")
                            } else {
                                p5.choosen_answer_last_time = Date.now();
                                p5.answer_image = p5.loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png")
                            }
                        }
                    }
                }
            }

            p5.setupNextRound = () => {
                setNewQuestion();
                current_question_pos = {
                    x: middleX,
                    y: middleY,
                };
                p5.choosen_answer = null;
                p5.answer_image_timer = ANSWER_IMAGE_TIME;
                p5.answer_image_pos = {
                    x: p5.windowWidth / 2,
                    y: p5.windowHeight * 2,
                };
                p5.isCorrectAnswer = false;
                p5.choosen_answer_last_time = 0;
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
                            x: p5.windowWidth * (0.5 + 0.25 * i),
                            y: p5.windowHeight * (0.5 + 0.25 * j),
                        })
                    }
                }
                p5.setupNextRound();
            };

            p5.draw = () => {
                p5.background(46, 40, 42);
                if (p5.choosen_answer) {
                    p5.imageMode(p5.CENTER);
                    p5.image(p5.answer_image, p5.answer_image_pos.x, p5.answer_image_pos.y, p5.windowWidth * ANSWER_IMAGE_WINDOWS_RATIO, p5.windowWidth * ANSWER_IMAGE_WINDOWS_RATIO)
                    if (p5.answer_image_pos.y > middleY) {
                        p5.answer_image_pos.y -= ANSWER_IMAGE_SPEED;
                        p5.answer_image_timer = Date.now()
                    } else {
                        if (Date.now() - p5.answer_image_timer > ANSWER_IMAGE_TIME * 1000) {
                            if (p5.isCorrectAnswer) {
                                current_question.AddScore(question_set.config.learning_rate);
                            } else {
                                current_question.RemoveScore(question_set.config.learning_rate);
                            }
                            p5.setupNextRound();
                        }
                    }
                } 
                p5.processAnswers();
                p5.textSize(QUESTION_TEXT_SIZE);
                p5.fill(255, 201, 20);
                p5.textAlign(p5.CENTER);
                p5.text(current_question.question, current_question_pos.x, current_question_pos.y)

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

<P5 {sketch} />

<style>
</style>
