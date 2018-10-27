// Backend logic:
var beepBop = function (inputNumber, humansName) {

  // Alert if non-number entered:
  if (isNaN(inputNumber)) {
    alert("I'm afraid I need a number human...");
  }

  // Set a variable for user's name:
  if (humansName == null) {
    var humansName = "Dave";
  }

  // Create an array of numbers:

  var numberArray = [];
  for (x = 0; x <= inputNumber; x++) {
    numberArray.push(x.toString());
  }

  // Iterate over the array of numbers and transform:

  var codedArray = numberArray.map(function(number) {
    if (number % 3 == 0 && number != 0) {
      return "I'm sorry, " + humansName + ". I'm afraid I can't do that.";
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
    var inputNumber = $("#inputNumber").val();
    var humansName = $("#humansName").val();

    $("#output").text(beepBop(inputNumber, humansName));
  });
});
