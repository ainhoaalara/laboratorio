


const form = document.getElementById('form');
const nombres = document.getElementById('nombres');
const correo = document.getElementById('correo');
const clave = document.getElementById('clave');
const clave2 = document.getElementById('clave2');

form.addEventListener('ENVIAR', e => {
	e.preventDefault();

	resultado();
});

function resultado() {

	const nombresValue = nombres.value.trim();
	const correoValue = correo.value.trim();
	const claveValue = clave.value.trim();
	const clave2Value = clave2.value.trim();

  if(nombresValue === '') {
		setErrorFor(nombres, 'Rellene este campo');
	} else {
		setSuccessFor(nombres);
	}

	if(correoValue === '') {
		setErrorFor(correo, 'Rellene este campo');
	} else if (!isEmail(correoValue)) {
		setErrorFor(correo, 'No ingreso un email válido');
	} else {
		setSuccessFor(correo);
	}

	if(claveValue === '') {
		setErrorFor(clave, 'Rellene este campo');
	} else if (clave.lenght > 8) {
    alert("No debe tener mas de 8 caracteres");}
  else {
		setSuccessFor(clave);
	}

	if(clave2Value === '') {
		setErrorFor(clave2, 'Rellene este campo');
	} else if(claveValue !== clave2Value) {
		setErrorFor(clave2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(clave2);
	}
}

function setErrorFor(input, message) {
	const formRegister = input.parentElement;
	const small = formRegister.querySelector('small');
	formRegister.className = 'form-register error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formRegister = input.parentElement;
	formRegister.className = 'form-register success';
}

function isEmail(correo) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}
