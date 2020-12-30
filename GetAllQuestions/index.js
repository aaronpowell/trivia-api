const questions = require("../questions");

module.exports = async function(context, req) {
  context.log("Request for all questions");

  context.res = {
    body: questions
  };
};
