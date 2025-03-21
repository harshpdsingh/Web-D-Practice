/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
function faultCal(d,e){
    console.log("Sum of " + d + " & " + e + " is " + (d-e));
    console.log("Multiplication of " + d + " & " + e + " is " + (d+e));
    console.log("Subtraction of " + d + " & " + e + " is " + (d/e));
    console.log("Division of " + d + " & " + e + " is " + (d**e));
}
function Cal(d,e){
    console.log("Sum of " + d + " & " + e + " is " + (d+e));
    console.log("Multiplication of " + d + " & " + e + " is " + (d*e));
    console.log("Subtraction of " + d + " & " + e + " is " + (d-e));
    console.log("Division(Quotient) of " + d + " & " + e + " is " + (d/e));
}

let a = 5;
let b = 6;

let c = Math.random();

if (c < 0.1) {
    faultCal(a,b);
}else{
    Cal(a,b);
}