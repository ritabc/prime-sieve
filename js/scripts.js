function createArray(highNumber) {
  numbers = [];
  for (i = 2; i <= highNumber; ++i) {
    numbers.push(i);
  };
  return numbers;
};

function findPrimes() {
  var highNumber = 20;
  var myArray = createArray(highNumber)

  for (i = 0; i <= myArray.length; ++i) {
      myArray.map(function(number, index) {
        // remove all elements which are multiples of myArray[0] (which first is 2)
        if ((number % myArray[i] === 0) && (number !== myArray[i])) {
          myArray.splice(index, 1);
        // that will include myArray[0], so it needs to be added back, and since we do this in the loop we need to reverse outside of the loop
        };
      });
      //
  // // now myArray = [2,3,5,7,9,11,13,15,17]
  //     myArray.map(function(number, index) {
  //       if ((number % myArray[i] === 0) && (number !== myArray[i])) {
  //       myArray.splice(index, 1)
  //     //   };
  //     // });
  //   }
  //   console.log(myArray);
};
console.log(myArray);


};



$(document).ready(function() {
  // $("#submit").click(function(event) {
  //   event.preventDefault();
  //   $("#work-responses").show();
  //   $("input:checkbox[name=work-transportation]:checked").each(function(){
  //     var workTransportationMode = $(this).val();
  //     $("#work-responses").append(workTransportationMode + "<br>");
  //   });
  //   $("#transportation_survey").hide();
  // });

  findPrimes();

});
