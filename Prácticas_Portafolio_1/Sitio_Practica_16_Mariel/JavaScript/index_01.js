window.onload = function(){
    setInterval(mostrarHora,1000)
    setInterval(mostrarFecha,1000)
    setInterval(horaReversa,1000)
}

function mostrarHora() {
    let fechahora =new Date();
    let hora =fechahora.getHours();
    let minutos =fechahora.getMinutes();
    let segundos =fechahora.getSeconds();
    if(hora < 10){
        hora = '0' + hora;
    }
    if(minutos < 10 ){
        minutos = '0' + minutos;
    }
    if(segundos < 10){
        segundos = '0' + segundos;
    }
    let sufijo = 'am';
    if(hora >= 12){
        if(hora > 12){
            hora =  hora - 12
        }
        sufijo = 'pm'
    }
    document.getElementById("reloj").innerHTML="Hora Actual: "+ hora + ":" + minutos + ":" + segundos +" " + sufijo;
}


function mostrarFecha() {
    let fechahora =new Date();
    let anio =fechahora.getFullYear();
    let mes =fechahora.getMonth();
    let diaMes =fechahora.getDate();
    document.getElementById("fecha").innerHTML="Fecha Actual: " + diaMes+ "/"+ mes + "/" + anio;
}

function horaReversa() {
    let fechahora =new Date();
    let hora =fechahora.getHours();
    let minutos =fechahora.getMinutes();
    let segundos =fechahora.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }

    if(minutos < 10 ){
        minutos = '0' + minutos;
    }

    if(segundos < 10){
        segundos = '0' + segundos;
    }

   let horaReversa;
   let minutosReversa;
   let segundosReversa;

   horaReversa = 24 - hora;
   minutosReversa = 60 - minutos;
   segundosReversa = 60 - segundos;
   
   if(horaReversa < 10){
    horaReversa = '0' + horaReversa;
    }

    if(minutosReversa < 10 ){
        minutosReversa = '0' + minutosReversa;
    }

    if(segundosReversa < 10){
        segundosReversa = '0' + segundosReversa;
    }
    document.getElementById("relojreversa").innerHTML="Hora reversa: " + horaReversa+ ":"+ minutosReversa + ":" + segundosReversa;
}
