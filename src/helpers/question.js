export const max_score = 10.0;

export class Question {
    /**
     * Initializes a new instance of the Question class.
     *
     * @param {Object} question - An object containing the question details.
     * @param {number} question.id - The unique identifier for the question.
     * @param {string} question.question - The text of the question.
     * @param {string} question.answer - The correct answer to the question.
     * @param {string[]} question.wrong_answers - An array of incorrect answers.
     */

    constructor(question) {
        this.id = question.id;
        this.question = question.question;
        this.answer = question.answer;
        this.wrong_answers = question.wrong_answers;
        this.score = 0.0;
    }

    AddScore(learning_rate) {
        this.score = Math.min(this.score + learning_rate, max_score);
    }

    RemoveScore(learning_rate) {
        this.score = Math.max(this.score - learning_rate, 0.0);
    }
}
