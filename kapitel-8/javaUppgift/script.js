// var ålder = prompt("Hur gammal är du?");

// if(ålder >= 18)
// {
//     alert("Du är över 18 bro");

// } else {
//     alert("Du är ett litet barn");
// }



// var ålder = prompt("Hur gammal är du?");

// if(ålder >= 15)
// {
//     document.writeln("Du får se filmen gng");

// } else {
//     document.writeln("Ingen film för dig");
// }


// var ålder = prompt("Hur kallt är det ute?");

// if(ålder > 20)
// {
//     document.writeln("Varmt!");

// } else {
//     document.writeln("Kallt!");
// }


// var ålder = prompt("favo djur?");

// if(ålder == "hund")
// {
//     document.writeln("Jag gillar också hundar");

// } else {
//     document.writeln("Jag gillar inte" + " " + ålder);
// }


// var ålder = prompt("Hur mycket pengar handlar du för?");

// if(ålder > 300)
// {
//     document.writeln("Rabatt till dig");

// } else {
//     document.writeln("Du spenderade" + " " + ålder + "kr" + " " + "Det är klart du INTE ska ha rabatt");

// }


// var lösen = "LetMeIn"
// var ålder = prompt("Lösenord:" + " ");

// if(ålder == lösen)
// {
//     document.writeln("Välkommen");

// } else {
//     document.writeln("Du är inte välkommen");
// }


// for(var i = 1; i <= 5; i++)
// {
//     document.writeln("Nummer:"+ " " + i);
// }


// var elever = prompt("Hur många elever i klassen?");

// for(var i = 1; i <= elever; i++)
// {
//     document.write("Elevnummer: " + i + "<br>");
// }

// for(var i = 10; i > 0; i--)
// {
//     document.write(i + "<br>");
    
// }

// document.writeln("START");

// var hemligtTal = 7;
// var svar = prompt("Gissa ett hemligt tal mellan 1-10");

// while(svar != hemligtTal)
// {
//     svar = prompt("Fel svar! Testa igen: ");
// }

// document.write("Rätt bror!");

var sparMål = 150;
var svar = prompt("Hur mycket har du sparat?");

while(svar < sparMål)
{
    svar = prompt("Du har sparat:" + " " + svar + " " + "detta är för lite!")
} if(svar > 10000)
{
    document.write("du har KROSSAT ditt sparmål med hela" + " " + svar + "kr");
} else if(svar >= 150 && svar <= 10000)
{
    document.write("Bra sparat ändå!" + " " + svar + " " + "är inte dåligt!");
}