import { randomFloat, randomInt } from "./functions";
import { max_score, Question } from "./question";

export class QuestionPool {
    constructor() {
        this.questions = [];
    }

    AddToPool(question) {
        let q = new Question(question);
        this.questions.push(q);
        return q;
    }

    GetAverageScore() {
        let score = 0;
        this.questions.forEach((element) => {
            score += element.score;
        });
        return score / this.questions.length;
    }

    GetRandomQuestion() {
        console.log("In GetRandomQuestion");
        let score = 0;
        this.questions.forEach((element) => {
            score += max_score - element.score;
        });

        let num = randomInt(0, score);
        console.log("Random float:", num);

        let s = 0;
        let ret = this.questions[0];
        console.log(this.questions);

        this.questions.forEach((element) => {
            let nextS = s + max_score - element.score;
            console.log("s: ", s);
            console.log("nextS", nextS);
            if (num >= s && num < nextS) {
                console.log("Choosen: ", element.id);
                ret = element;
            }
            s = nextS;
        });

        return ret;
    }
}
