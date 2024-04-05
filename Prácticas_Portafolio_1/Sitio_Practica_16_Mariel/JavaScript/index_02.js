function numeroElevado(){
    let num1 = prompt("Ingrese un número menor a 20");
    let num2 = prompt("Ingrese un número mayor al número 1 y menor a 20");
    let elevado = 0;

    try{
        if (num1 > 20 || num2 > 20){
            throw "Los dos Números deben estar entre 0 y 20";
        }else if( num2 < num1) {
            throw "El número uno no puede ser mayor al número 2";
        }else{
            elevado = Math.pow(num1,num2);
        }
    
    } catch(e){
        alert(e);
    }
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("numEle").innerHTML = elevado;
}

function aleatorio(){
    let aleatorio = Math.floor(Math.random()*20);
    let numero;
    switch(aleatorio)
    {
        case 0:
            numero =  "Cero";
            break;
        case 1:
            numero =  "Uno";
            break;
        case 2:
            numero =  "Dos";
            break;
        case 3:
            numero = "Tres"
            break;
        case 4:
            numero =  "Cuatro";
            break;
        case 5:
            numero = "Cinco";
            break;
        case 6:
            numero =  "Seis";
            break;
        case 7:
            numero =  "Siete";
            break;
         case 8:
            numero =  "Ocho";
            break;
         case 9:
            numero =  "Nueve";
            break;
        case 10:
            numero =  "Diez";
            break;
        case 11:
            numero =  "Once";
            break;
        case 12:
            numero =  "Doce";
            break;
        case 13:
            numero =  "Trece";
            break;
        case 14:
            numero =  "Catorce";
            break;
        case 15:
            numero =  "Quince";
            break;
        case 16:
            numero =  "Dieciséis";
            break;
        case 17:
            numero =  "Diecisiete";
            break;
        case 18:
            numero =  "Dieciocho";
            break;
        case 19:
            numero =  "Diecinueve";
            break;
        case 20:
            numero =  "Veinte";
            break;
    }

    
}

document.getElementById("aleatorio").innerHTML = numero;