const questions = require("../questions");

module.exports = async function (context, req) {
  context.log("Request for all questions");

  context.res = {
    body: questions.map(function (question) {
    return {
      question: question.question,
      answers: question.incorrect_answers
        .concat([question.correct_answers])
        .sort()
    };
    })
  };
};
