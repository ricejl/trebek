export default class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  get Template() {
    return `
    <h3>${this.question}</h3>`;
  }
}
