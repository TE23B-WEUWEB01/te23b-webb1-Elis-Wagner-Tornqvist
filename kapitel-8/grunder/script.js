// var dag = "Fredag";
// alert(dag);
// console.log("idag är det " + dag);

// var stad = prompt("Var är du född");
// console.log("Du är född i: " + stad);

//vi gör en enkel captcha

// var gissning = prompt("Är det ok att fuska på prov");

// if(gissning.toLowerCase() == "nej")
// {
//     alert("Du är en human, W!");
// } else {
//     alert("Du är en robot");
// }

//vi gör en spamcheck med två slumpade tal

// var slumptal1 = Math.round(Math.random() * 10000);
// var slumptal2 = Math.round(Math.random()* 1000);
// var summa = slumptal1 + slumptal2;
// document.writeln("<h1>Slumptal = " + slumptal1 + "</h1>");
// document.writeln("<h1>Slumptal = " + slumptal2 + "</h1>");

// var question = prompt("Vad är " + slumptal1 + "+" + slumptal2 + "?");

// if(question == summa)
// {
//     document.writeln("<h1>Bra jobbat cuh </h1>");
// } else {
//     document.writeln("<h1>FEL!!</h1>");
// }

//Uppgift

// var slump1 = Math.round(Math.random() * 10000);
// var slump2 = Math.round(Math.random() * 10000);

// var siffra1 = prompt("Skriv en siffra");
// var siffra2 = prompt("En till siffra");

// var summa = Number(siffra1) + Number(siffra2);

// document.writeln("Här är summan " + summa);



//skatte uträkning

// var salary = 45000;
// var skatt = 45000*0.67;

var question = prompt("Vad är din lön?");
var question2 = prompt("Vad betalar du i skatt");

var nettolön = Number(question) * (100 - Number(question2)) / 100;

document.writeln("Din nettolön är: " + Math.round(nettolön));






