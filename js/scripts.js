
var userInput = function(input) {
  console.log(input);
  var yWord = [];

  //for loop: 3 parameters
  //1st is the counter
  //2nd when does it stop?
  //what to do per "round"
    //logic happens in here.

    //if the word starts with y, then
    //move that y to end of word
    //and add an ay.
  debugger;
    var charArray = input.split("");
    var newcharArray = [];
    if (input.charAt(0) === "y"){
      //then do something.
      newcharArray = charArray.splice(0, 1);
      charArray.push("y");
      charArray.push("ay");
      return charArray;
    }
    else {
      console.log("test");
    }



    // yWord.push(i);
    // yWord.splice(0, 1, 'yay');
    // return yWord;
  }

$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var inputString = $("#word").val();
    // console.log(inputString);

    var result = userInput(inputString);
    var finalResult = result.join("");


    $("#result").text(finalResult);
  });
});


// var consonants = ["B", "C", "D", "F", "G," "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "W", "Z"]
//
// var vowels = ["A", "E", "I", "O", "U", "Y"]

//will we need to convert uses input to uppercase so the code can compare?//



// var qWord = []
// for (index = 0; index = "q") {
//   qWord.push(index);
//   qWord.splice(0, 1, "quay");
//   return qWord;
// }
//
// var conWord2 = []
// for (index = 0; index = consonants; index < 2){
//   conWord2.push(index);
//   // we don't know if we can concat with "&&" and the numbers that refer to the position in the array
//   conWord2.concat(0 && 1 && "ay");
//   // end
//   conWord2.splice(0, 2);
// }
//
// var conWord = []
// for (index = 0; index = consonants; index < 1)  {
//   conWord2.push(index);
//   // we don't know if we can concat with "&&" and the numbers that refer to the position in the array
//   conWord2.concat(0 && "ay");
//   // end
//   conWord.splice(0, 1)
// }
//
// var vowelWord = []
// for (index = 0; index = vowels; index < 1)  {
//   conWord2.push(index);
//   // we don't know if we can concat with "&&" and the numbers that refer to the position in the array
//   conWord2.concat(0 && "ay");
//   // end
//   conWord.splice(0, 1)
// }
//


//begin front end logic//
