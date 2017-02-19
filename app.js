// your code here!

function getAverageWordLength(tokens) {
  // join all tokens together to create one big string
  // then divide that total length by the number
  // of tokens to get average
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countDistinctWords(tokens) {
  
  var distinctWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1) {
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}


function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text) {
  // tokenize our text then compute our data points

  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);

  // take our data and display it in the dom
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}

function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    // get the text the user submitted
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}

$(function() {
  watchFormSubmission();
});
