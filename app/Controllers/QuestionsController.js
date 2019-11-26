import _questionsService from "../Services/ValuesService.js";
import _store from "../store.js";

//Private
function _drawQuestion() {
  let questions = _store.State.questions;
  console.log(questions);
  questions.forEach(question => {
    template += question.getTemplate();
  });
  document.getElementById("question").innerHTML = template;
}

//Public
export default class QuestionsController {
  constructor() {
    store.subscribe("questions", _drawQuestion);
  }

  generateQuestion() {
    event.preventDefault();
    _questionsService.generateQuestion();
  }
}

// FIXME when do you use underscores and when don't you? how about on import?
//FIXME is this importing SERVICE (same as _questionsService?)
