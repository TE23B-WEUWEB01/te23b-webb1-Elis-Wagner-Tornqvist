function kalkylator(op) {
    // Välj textrutorna
    let rutaTal1 = document.querySelector("#tal1");
    let rutaTal2 = document.querySelector("#tal2");
    let rutaSvar = document.querySelector("#svar");

    //beräkning

    if(op == '+')
    {
        rutaSvar.value = Number(rutaTal1.value) + Number(rutaTal2.value);
    }
    else if(op == '-')
    {
        rutaSvar.value = rutaTal1.value - rutaTal2.value;
    }
    else if(op == '/')
    {
        rutaSvar.value = rutaTal1.value / rutaTal2.value;
    }
    else if(op == '*')
    {
        rutaSvar.value = Number(rutaTal1.value) * Number(rutaTal2.value);
    }

    if(rutaSvar.value == "666")
    {
            
        document.body.style.backgroundColor = "red";
        
        
    } else {
        document.body.style.backgroundColor = "white"
    }

    }