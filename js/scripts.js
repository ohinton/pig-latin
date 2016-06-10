//back-end logic starts//

//for loop: 3 parameters
//1st: is the counter
//2nd: when does it stop?
//3rd: what to do per "round"
//logic happens in here.

//step 1: split user input into an array of characters//
//step 2: search through array for vowels by using the indexOf method.//
//step 3: if the word starts with a vowel, then keep the same //
//step 4: if the word doesn't start with a vowel, set the variable "breakpoint" to include the first consecutive non-vowels (consonants)//
//step 5: use the splice method to put the first consecutive non-vowels (consonants) into the variable "firstConsonants"//
//step 6: use the concat method to join the charArray and firstConsonant arrays together//
//step 7: use push to add "ay" to the end of charArray//
//step 8: return charArray. need to return the function to be able to use it in the front-end logic//

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var userInput = function(input) {
  var charArray = input.split("");

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

//function to handle sentences//
//step 1: split user input into variable wordArray at the " " (spaces) between the words.
//step 2: use the forEach  method to call a function on each word in wordArray
//step 3: run the userInput function on each word and set these words in the variable translatedWord
//step 4: use the join method to join the words of the array into a string
//step 5: add the final message to the translatedWord, plus add spaces
//step 6: set this = to finalMessage
//step 7: return finalMessage outside the forEach function, but inside the userSentence function

var userSentence = function(input) {
  var finalMessage = "";
  var wordArray = input.split(" ");
  wordArray.forEach(function(word) {
    var translatedWord = userInput(word).join("");
    finalMessage = finalMessage + translatedWord + " ";
  });
  return(finalMessage)
}
//back-end logic ends//

//front-end logic starts//
//step 1: tell jquery to run this function with the document is ready by using the $ sign
//step 2: within this function, run another funtion in the event that the form "pig-latin" is submitted (user clicks the submit button)
//step 3: event.preventDefault(); If this method is called, the default action of the event will not be triggered. This allows the results to be displayed below
//step 4: set the user input value to the variable inputString
//step 5: run the function userSentence on the input sting and set it to the variable "result"
//step 6: run jquery to insert the result into the HTML

$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var inputString = $("#word").val();
    var result = userSentence(inputString);

    $("#result").text(result);
  });
});
//front-end logic ends//
