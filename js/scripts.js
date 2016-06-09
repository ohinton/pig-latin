  //for loop: 3 parameters
  //1st is the counter
  //2nd when does it stop?
  //what to do per "round"
    //logic happens in here.

    //if the word starts with y, then
    //move that y to end of word
    //and add an ay.

var vowels = ["a", "e", "i", "o", "u"];

var userInput = function(input) {
  var charArray = input.split("");

  // //Vowel-words start here
  // for (i=0; i < vowels.length; i++){
  //   if (vowels[i]===charArray[0]) {
  //     charArray.push("ay");
  //     //loop through array of vowels here
  //     return charArray;
  //   }
  // }
  //Vowel-words end here

  for (i=0; ;i++){
    if (vowels.indexOf(charArray[i])>=0){
      var breakpoint = i;
      break;
    }
  }
  var firstConsonants = charArray.splice(0, breakpoint);
  charArray = charArray.concat(firstConsonants);
  charArray.push("ay");
  return charArray;
}

var userSentence = function(input) {
  var finalMessage = "";
  var wordArray = input.split(" ");
  wordArray.forEach(function(word) {
    var translatedWord = userInput(word).join("");
    finalMessage = finalMessage + translatedWord + " ";
  });
  return(finalMessage)
}




$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var inputString = $("#word").val();
    var result = userSentence(inputString);
    var finalResult = result;


    $("#result").text(finalResult);
  });
});
