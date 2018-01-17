function replyResult(event) {
  console.log(new Date().getTime());
  const result = this.value * 1;
  const buttonLabels = [' A ', ' B ', ' C '];
  const answerData = {
    question: {
      text: '自己答题，来不及敲题目...',
      questionId: 0
    },
    result: result
  };
  this.textContent = '...'
  $.post(
    "http://localhost:7777/reply-answer",
    answerData,
    (response) => {
      console.log("reply success ...");
    }
  );
  setTimeout(() => {
    this.textContent = buttonLabels[result];
  }, 500);
}

$("#result-zero").click(replyResult);
$("#result-one").click(replyResult);
$("#result-two").click(replyResult);
