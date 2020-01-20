const questions = require("../questions");

function findQuestion(question) {
  let q = questions.filter(obj => obj.question === question);

  return q[0];
}

module.exports = async function(context, req) {
  let { question, answer } = req.query;
  if (!question) {
    console.log("Request was made but no question provided.");
    context.res = {
      status: 400,
      body: "Please provide the question you want to check as a query string."
    };
    return;
  }

  if (!answer) {
    console.log("Request was made but no answer provided.");
    context.res = {
      status: 400,
      body: "Please provide the answer you want to check as a query string."
    };
    return;
  }

  let q = findQuestion(question);

  if (!q) {
    console.log(
      `The question ${question} isn't something understood by the API.`
    );
    context.res = {
      status: 404,
      body: `The question ${question} isn't something understood by the API.`
    };
    return;
  }

  if (q.correct_answer === answer) {
    console.log("Correct answer found");
    context.res = {
      body: "That was correct!"
    };
    return;
  } else {
    console.log(
      `For the question ${question} the answer ${answer} was provided but the correct answer is ${q.correct_answer}.`
    );
    context.res = {
      status: 403,
      body: "Sorry, but that answer was incorrect."
    };
    return;
  }
};
