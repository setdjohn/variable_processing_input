var prompter = prompt("Your total bill is?");
var number1=Number(prompt("tax"));
var number2=Number(prompt("Enter total bill"));
var answer=(number1)*(number2)
document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#lessCool").innerHTML=prompter;

var number3=Number(prompt("Enter tip"));
var number4=Number(prompt("Taxed Bill"))
var answer=(number3)*(number4)
document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#lessCool").innerHTML=prompter;

var number5=Number(prompt("Tip"));
var number6=Number(prompt("Taxed Bill"))
var answer=number5+number6
document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#lessCool").innerHTML=prompter;