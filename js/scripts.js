var beepBop = function (inputNumber) {

  // Create an array of numbers
  var numberArray = [];
  for (x = 0; x <= inputNumber; x++) {
    numberArray.push(x.toString());
  }
  return numberArray;
}






$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputSentence = $("#inputNumber").val();
    $("#output").text(beepBop(inputSentence));

  });
});
