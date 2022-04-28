var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
	event.preventDefault(); //evita la recarga de la pagina al hacer clic si sucede
	console.log("hizo clic en el boton adicionar");

	var form = document.querySelector("#form-adicionar");
	
	var paciente = capturarDatosPaciente(form);
		
	

	var errores = validarPaciente(paciente);
	
	if (errores.length > 0){  //lee si tiene caracteres mayor a 0
		exhibirMensajeErrores(errores);
		console.log("paciente incorrecto");
		return;   //corta la funcion
	}
	
	adicionarDatosPacienteTabla(paciente);
	form.reset();

	var mensajeErrrores = document.querySelector("#mensajes-errores");
	mensajeErrrores.innerHTML = "Datos correctos";  // mensaje al introducir datos

});

function adicionarDatosPacienteTabla(paciente){
	var pacienteTr = construirTr(paciente);
	var tabla = document.querySelector("#tabla-pacientes");

	tabla.appendChild(pacienteTr);
	
};

function capturarDatosPaciente(form){
	//captura los datos del formulario
	var paciente = {
		 nombre : form.nombre.value,
		 peso : form.peso.value,
		 altura : form.altura.value,
		 gordura : form.gordura.value,
		 imc :  calcularImc(form.peso.value,form.altura.value)
		};
		return paciente;
	};

function construirTr(paciente){
	//crea los tds y un tr
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	//asginacion de los tr al td, y a la tabla del tr
	pacienteTr.appendChild (construirTd(paciente.nombre,"info-nombre"));
	pacienteTr.appendChild (construirTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild (construirTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild (construirTd(paciente.gordura,"info-gordura"));
	pacienteTr.appendChild (construirTd(paciente.imc,"info-imc"));
		
	return pacienteTr;

};

function construirTd(dato,clase){
	//asignar valores a la propiedad textContent
	var td = document.createElement("td");
	td.classList.add(clase);
	td.textContent = dato;

	return td;
};

function validarPaciente(paciente){
	var errores = [];

	if (paciente.nombre.length == 0 ){
		errores.push( "El nombre no puede estar vacio");
	};
	if (paciente.peso.length == 0 ){
		errores.push( "El peso no puede estar vacio");
	};
	if (paciente.altura.length == 0 ){
		errores.push( "La altura no puede estar vacio");
	};
	if (paciente.gordura.length == 0 ){
		errores.push( "La %gordura no puede estar vacio");
	};

	if (!validarPeso(paciente.peso)){
		errores.push( "El peso es incorrecto");
	};
	if (!validarAltura(paciente.altura)){
		errores.push ("La altura es incorrecta");
	};
		return errores;
}; 

function exhibirMensajeErrores(errores){
	var ul = document.querySelector("#mensajes-errores");
	ul.innerHTML =""; // limpia los mensajes

	errores.forEach(function(error) {
		var li = document.createElement("li");
		li.textContent = error;
		ul.appendChild(li);
	});
}