//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var calling = callFriend();
console.log(calling("435-215-9248"));

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  function makeCounter(){
    var num = 0;
    return function() {
      num++;
      return num;
    }
  }
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'.
   Write a second function named codeFriend that accepts the first function
   as it's first parameter. The second function should return a new third
   function. Store the third function in a variable, codeEcho which, when
   invoked, invokes the first, original function that was passed in, but will
   only ever do so once (returns null after first invocation).
*/

function codeLove() {
  return "I love code";
}
function codeFriend(){
  var x = 0;
  return function(){
    if (x === 0) {
      x++;
      return codeLove();
    }
    else
      return null;
  }
}
var codeEcho = codeFriend();

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that
  accepts two parameters. The first parameter will be an anonymous function and
  the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the
  anonymous funciton to be invoked 'N' number of times. After it's been invoked
   'N' number of times, return 'STOP'.
*/



// function fnCounter(function, N) {
//   var counter = 1;
//   function () {
//     if (counter < N){
//       counter++;
//       function;
//     }
//     else if (N <= 11){
//       return "STOP";
//     }
//   }
// }
// fnCounter(function, 10);

/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without
  running the code) then below write what you expect to happen when the
  funciton is invoked. *Hint: setTimeout calls a function or evaluates an
  expression after a specified number of milliseconds.

    //it will count up to five every i times by 1000 milliseconds


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //It just logged a 6.


  Fix the counter function so that it works the way you expect it to work.
   (logging 1 then 2 then 3, etc) (Note: No unit test for this one because
   of the timeout)
*/

for (var i=1; i<=5; i++) {
(function counter(i){
    setTimeout( function timer(){
        console.log(i);
    }, 1000 );
  })(i);
};



//Next Problem


var funcArray = [];
for( var i = 0; i < 6; i++ ){
 	(function( i ){
 		funcArray.push(
 			function(){ console.log( i ); }
 		);
 	})( i );
 }


  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

/*  *Hint: Don't let this fool you. Break down what's really happening here.
*/
