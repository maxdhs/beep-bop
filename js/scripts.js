// Backend logic:

var beepBop = function (inputNumber) {

  // Create an array of numbers:

  var numberArray = [];
  for (x = 0; x <= inputNumber; x++) {
    numberArray.push(x.toString());
  }

  // Iterate over the array of numbers and transform:

  var codedArray = numberArray.map(function(number) {
    if (number % 3 == 0 && number != 0) {
      return "I'm sorry, Dave. I'm afraid I can't do that."
    }
    else if (number.includes("1")) {
      return "Boop!"
    }
    else if (number.includes("0")) {
      return "Beep!"
    }
    else {
      return number;
    }
  });
  return codedArray
}

// Frontend logic:

$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputSentence = $("#inputNumber").val();
    $("#output").text(beepBop(inputSentence));

  });
});
