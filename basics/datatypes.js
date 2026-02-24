"use strict"; //treat all JS code as newer verison

let name="Anju"
let age=13;
let isLoggedIn=false;

//number -2^53
//bigint-large number
//string-""
//boolean-true or fales
//null-standalone value  undefined
//symbol--to find uniqueness


//object

console.log(typeof(2));
console.log(typeof(null)); //type-object
console.log(typeof(undefined));

//convert string to number

let score="33";
console.log(typeof(score));
let valueIntNumber=Number(score);
console.log(typeof(valueIntNumber));
console.log(valueIntNumber);

//33ac will convert in number but in NAN
//true convert in 1,false-0

let isLoggedInn=1;
let booleanIsLoggedInn=Boolean(isLoggedInn);
console.log(booleanIsLoggedInn);

//string-1
//empty string-false