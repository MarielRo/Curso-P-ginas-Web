function negativosPositivos(){
    let num = 0;
    let numPosi = 0;
    let numNega = 0
    let cantidad=0;

	for ( let i = 1; i <= 10 ; i++) {
        num = prompt("Ingrese un número negativo o positivo # " + i);
        if(num >= 1){
            numPosi += 1;
        } else if( num <= 0 ){
            numNega += 1;
        }
	}
    document.getElementById("numPosi").innerHTML =numPosi;
    document.getElementById("numNega").innerHTML =numNega;
}


function parImpar(){
   let cantidad = 0;
    let numPar = 0;
    let numImpar = 0;
    let num = 0;
    let i = 0;
    cantidad = prompt("Ingrese la cantidad de números que desea digitar");
    while(i < cantidad ){
        i++;
      num = prompt("Ingrese el número par o impar # " + i );
      if (num%2 == 0){
        numPar += 1;
      }
      else{
        numImpar += 1;
      }
    }
    document.getElementById("numPar").innerHTML =numPar;
    document.getElementById("numImpar").innerHTML =numImpar;
}


function arrays(){
   let marcas = [];
   let nombres = [];
   let num = 0;
   let marca = '';
   let nombre = '';
   for (let i = 0; i < 5; i++) {
    marcas[i] = prompt("Ingrese la marca " + i + " de carros");
   }
   for (let i = 0; i < 5; i++) {
    nombres[i] = prompt("Ingrese el nombre " + i + " de personas");
   }
   num = prompt("Ingrese un número del 1 al 5"); 
    switch (num) {
        case '1': num = 1;
           marca = marcas[0];
           nombre = nombres[0];
            break;
        case '2':
            marca = marcas[1];
            nombre = nombres[1];
            break;
        case '3':
            marca = marcas[2];
            nombre = nombres[2];
            break;
        case '4':
            marca = marcas[3];
            nombre = nombres[3];
            break;
        case '5':
            marcas = marca[4];
            nombres = nombre[4];
            break;

        default:
            alert("Número ingresado fuera de rango")
            break;
    }

    document.getElementById("marca").innerHTML =marca;
    document.getElementById("nombre").innerHTML =nombre;
}

