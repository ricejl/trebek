import Store from "../store.js";
import Question from "../Models/Question.js";

let _questionApi = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 3000
});

class QuestionsService {
  generateQuestion() {
    let question = new Question();
    let questions = Store.State.questions.map(q => new Question(q));
    questions.push(question);
    Store.commit("questions", questions);
  }

  loadQuestion() {
    //   TODO pickup here
  }
}

const SERVICE = new QuestionsService();
export default SERVICE;
