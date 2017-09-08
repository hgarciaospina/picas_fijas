var correct;
var random_number = "";
var prueba1;
array_user_number = [];

//Inicializa el juego
game();

function game() {
	random();
}

//Genera número al azar de 4 digitos no repetidos y puede  incluir el cero al inicio
function random(){
	// Hecho por KarlanKas en el 2004
	//No me quites el crédito
	var digit = [];
	for(i = 0; i < 4; i++){
		digit[i] = parseInt(Math.random()*10);
		for(j = 0; j < i; j++){
			if(digit[i] == digit[j]){
				i -= 1;
				break;
			}
	   }
	}
	for(i = 0;i < 4; i++){
	   random_number += digit[i];
	 }
   alert('Número generado: ' + random_number);
}

//Valida que el usuario ingrese solo números de 4 digitos y captura el numero
function user_number(){
	var numbers = document.getElementById('number').value.toString();
	if(numbers.length > 4) {
		alert('Por favor ingrese un número de 4 digitos.' + numbers);
		document.getElementById('number').value = '';
		document.getElementById('number').focus();
		return false;
	}
}

//Carga en un arreglo el número ingresado por el usuario una oprime la tecla <Enter>
function onPress_ENTER()
{
    var keyPressed = event.keyCode || event.which;

    if(keyPressed==13)
    {
			prueba1 = document.getElementById('number').value;
		  alert(' numero usuario ' + prueba1 + ' numero al azar ' + random_number );

			for(k = 0; k < prueba1.length; k++){
				 array_user_number[k] = parseInt(prueba1.charAt(k));
			 }
			 alert(' array user_number ' + array_user_number );
			 arrays();
       keyPressed=null;
    }
    else
    {
        return false;
    }
}

// Prueba que imprime lpos datos almacenados del usuario y del sistema
function arrays(){
	for(k = 0; k < 4; k++){
		 alert('numeros usuario ' + ' posición  ' + '[' + k + ']' + array_user_number[k]);
		 alert('numeros sistema ' + ' posición  ' + '[' + k + ']' + random_number[k]);
	}
}
