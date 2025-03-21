

// var lösenordet = "skibidi";
// var användarnamn = "elis";
// var användare = prompt("Användarnamn: ");
// var question = prompt("Skirv lösenordet tack:");
// var ålder = prompt("Hur gammal är du" + " " + användarnamn);

// // while(question != lösenordet)
// // {
// //     question = prompt("Försök igen pls");
//  if(question == lösenordet && användare == användarnamn)
// {
//     document.writeln(`Hej ${användarnamn} du är just nu ${ålder} år gammal`);
// } else {
//     användare = prompt("user igen tack");
//     question = prompt(" lösenord, Försök igen pls");
//     ålder = prompt("Din ålder igen är du snäll");
// }


//Läs in ett heltal mellan 10-50
//skirv ut så många rader som heltalet
var success = true;
var nummer = parseInt(prompt("Skriv in ett nummer mellan 5-50"));

while(success)
{


if(nummer > 50 || nummer < 5)
{
    nummer = prompt("Jag sa ett nummer mellan 5-50!!!!");
} else if (nummer <= 50 && nummer >= 5)
{
    
    for(var i = 1; i<=nummer; i++)
    {
        document.write(`Rad: ${i} <br>`);
    }
    break;
}

}