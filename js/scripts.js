function createArray(highNumber) {
  numbers = [];
  for (i = 2; i <= highNumber; ++i) {
    numbers.push(i);
  };
  return numbers;
};

function findPrimes(myArray) {
  for (i = 0; i <= myArray.length; ++i) {
      myArray.map(function(number, index) {
        // remove all elements which are multiples of myArray[0] (which first is 2)
        if ((number % myArray[i] === 0) && (number !== myArray[i])) {
          myArray.splice(index, 1);
        };
      });
      //
  };
  return myArray;
};



$(document).ready(function() {
  $("#transport-submit").click(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("#transportation_survey").hide();
  });

  $("#primes-submit").click(function(e) {
    e.preventDefault();
    var number = parseInt($("#primes").val());

    $("span#number").text(number)

    var primes = findPrimes(createArray(number));

    primes.forEach(function(prime) {
      $("p#primes").append(prime + " ")
    });
  });
});
