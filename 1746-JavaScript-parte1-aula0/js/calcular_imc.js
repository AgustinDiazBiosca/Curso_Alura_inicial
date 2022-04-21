var titulo = document.querySelector(".titulo");

titulo.addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
	console.log("Usted hizo clic en el titulo");
};

var pacientes = document.querySelectorAll(".paciente");

for (i = 0;i< pacientes.length; i++){
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;

	if (peso < 0 || peso > 500 ){
		pesoValido = false;
		tdImc.textContent = "Peso Incorrecto";
		paciente.classList.add("paciente-incorrecto");
	};

	if (altura < 0 || altura > 2.5){		
		alturaValida = false;
		tdImc.textContent = "Altura Incorrecta";
		paciente.classList.add("paciente-incorrecto");
		
	};

	if(pesoValido && alturaValida){		
		tdImc.textContent = calcularImc(peso,altura);
		
	};

};

function calcularImc(peso,altura){
	var imc = peso /(altura *altura);
	return imc.toFixed(2);
	
};