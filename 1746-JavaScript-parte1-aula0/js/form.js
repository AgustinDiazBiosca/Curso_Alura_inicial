var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
	event.preventDefault(); //evita la recarga de la pagina si sucede
	console.log("hizo clic en el boton adicionar");

	var form = document.querySelector("#form-adicionar");
	console.log(form);

	var nombre = form.nombre.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	console.log(nombre);
	console.log(peso);
	console.log(altura);
	console.log(gordura);

	var tabla = document.querySelector("#tabla-pacientes")

	var pacienteTr = document.createElement("tr");
	var nombreTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nombreTd.textContent = nombre;
	alturaTd.textContent = altura;
	pesoTd.textContent = peso;
	gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso,altura);
	
	pacienteTr.appendChild(nombreTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

	console.log(pacienteTr);

	tabla.appendChild(pacienteTr);

});