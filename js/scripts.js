function createArray(highNumber) {
  numbers = [];
  for (i = 2; i <= highNumber; ++i) {
    numbers.push(i);
  };
  return numbers;
};

function findPrimes() {
  var number = 100;
  var myArray = createArray(number)

  // loop should eventually start here

  // var prime = 2;
  // // for now, remove all multiples of prime (which is currently 2)
  // // by looping through primeList
  //
  // for (var i = prime; i <= primeList.length + 1; i += 1) {
  // var prime = primeList[0];
  //
  //   // we need a new index j, which goes 0, 1, 2, 3, with the array elements
  //   for (j = 0; j <= primeList.length; ++j) {
  //     primeList.splice(j, 1)
  //   };
  //   console.log(primeList)
  //
  // // for (var i = prime; i <= primeList.length + 1; ++i)
  // // console.log(i);
  // // console.log(primeList);
  // // primeList.splice()
  // };

  // for (i = myArray[0]; i <= myArray.length + 1; i++) {
  myArray.map(function(number, index) {
    // remove all elements which are multiples of myArray[0] (which first is 2)
    if ((number % myArray[0] === 0) && (number !== myArray[0])) {
      myArray.splice(index, 1);
    // that will include myArray[0], so it needs to be added back, and since we do this in the loop we need to reverse outside of the loop
    }
  });


  // now myArray = [2,3,5,7,9,11,13,15,17]
  myArray.map(function(number, index) {
    if ((number % myArray[1] === 0) && (number !== myArray[1])) {
    myArray.splice(index, 1)
    };
  });
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
