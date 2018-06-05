function createArray(highNumber) {
  numbers = [];
  for (i = 2; i <= highNumber; ++i) {
    numbers.push(i);
  };
  return numbers;
};

function findPrimes() {
  var number = 17;
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
    myArray.splice(index, 1);
    myArray.unshift(number);
  });
  myArray.reverse()
  console.log(myArray);

  myArray.map(function(number, index) {
    myArray.splice()
  })

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
