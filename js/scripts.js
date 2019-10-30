$(document).ready(function() {
 $("#sentence").submit(function(event) {
   event.preventDefault();

   var userValue = $("input#userInput").val();


  var output = [];
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  var swapper = "";
// var pigLatin = funciton(word) {
//
// }



// .forEach()
// (vowels + "way")
  // var word = function((placeholder) {
    if (vowels.includes(userValue[0])) {
    swapper = (userValue + "way");

  } else {
    console.log("No Vowels");

// })
}

$('#displayIt').text(swapper);

// for(index 0;  )
//
// word at index 0 === vowel
  });

});
