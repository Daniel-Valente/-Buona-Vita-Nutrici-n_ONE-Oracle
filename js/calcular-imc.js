var trPacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < trPacientes.length; i++) {
    var paciente = trPacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
    
    if (!pesoEsValido) {
        tdIMC.textContent = "Peso incorrecto";
        paciente.classList.add("paciente-incorrecto");
    }

    if (!alturaEsValida) {
        tdIMC.textContent = "Altura incorrecto";
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoEsValido && alturaEsValida) {
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function calcularIMC(peso,altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if(peso >= 0 && peso <= 100) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}




