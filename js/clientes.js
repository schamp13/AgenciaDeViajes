function registrarSolicitud(){
    restablecerAlertas();
    if(validarCampos()==true){
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            destino: document.getElementById('destino').value,
            personas: document.getElementById('personas').value,
            fecha: document.getElementById('fecha').value,
            comentario: document.getElementById('comentario').value
        }
        
        console.log("Solicitud registrada");
    }else{
        console.log("Error");
    }
}

function validarCampos() {
    const campos = [
        document.getElementById('nombre').value,
        document.getElementById('email').value,
        document.getElementById('destino').value,
        document.getElementById('personas').value,
        document.getElementById('fecha').value,
        document.getElementById('comentario').value
    ];

    console.log(campos)

    // Genera alertas en cada campo
    campos.forEach((campo, i)=>{
        switch(i){
            case 0:
                validacionEspecifica('nombre',campo);
                break;
            case 1:
                validacionEspecifica('email', campo);
                break
            case 2:
                validacionEspecifica('destino', campo);
                break
            case 3:
                validacionEspecifica('personas', campo);
                break
            case 4:
                validacionEspecifica('fecha', campo);
                break
            case 5:
                validacionEspecifica('comentario', campo);
                break
        }
    })

    // Si termina el bucle toda la informacion es correcta
    for(let i=0;i<campos.length;i++){
        switch(i){
            case 0:
                if(validacionEspecifica('nombre', campos[i])==true){
                    console.log("Nombre válido");
                } else {
                    return false;
                }
                break;
            case 1:
                if (validacionEspecifica('email', campos[i]) == true) {
                    console.log("Email válido");
                } else {
                    return false;
                }
                break;
            case 2:
                if (validacionEspecifica('destino', campos[i]) == true) {
                    console.log("Nombre válido");
                } else {
                    return false;
                }
                break;
            case 3:
                if (validacionEspecifica('numero', campos[i]) == true) {
                    console.log("Número válido");
                } else {
                    return false;
                }
                break;
            case 4:
                if (validacionEspecifica('fecha', campos[i]) == true) {
                    console.log("Fecha válida");
                } else {
                    return false;
                }
                break;
            case 5:
                if (validacionEspecifica('comentario', campos[i]) == true) {
                    console.log("Comentario válido");
                } else {
                    return false;
                }
                break;
        }
    }

    return true;
}

function validacionEspecifica(tipo,dato){
    switch(tipo){
        case 'nombre':
            if(dato==""){
                document.getElementById('nameError').textContent="Campo obligatorio";
                return false;
            } else {
                return true
            }
  
        case 'email':
            if(dato==""){
                document.getElementById('emailError').textContent = "Campo obligatorio";
                return false;
            } else {
                if (esEmailValido(dato)) {
                    return true;
                } else {
                    document.getElementById('email').value = "";
                    document.getElementById('emailError').textContent = "Email inválido";
                    return false;
                }
            }
            
        case 'destino':
            if(dato=="Elija su Destino de Interés"){
                document.getElementById('destinoError').textContent="Destino inválido";
                return false;
            } else {
                return true;
            }
        case 'numero':
            return true;
        case 'fecha':
            if(dato==""){
                document.getElementById('fechaError').textContent = "Campo obligatorio";
                return false;
            } else {
                if (esFechaFutura(dato)) {
                    return true;
                } else {
                    document.getElementById('fecha').value = "";
                    document.getElementById('fechaError').textContent = "La fecha debe ser futura"
                    return false;
                }
            }
        case 'comentario':
            return true;
    };
}

function esEmailValido(email) {
    if (typeof email !== 'string') return false;
    // Regla práctica (cubre la mayoría de casos reales)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email.trim());
}

function esFechaFutura(fechaStr) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Ignora horas para comparar solo fechas

    const fechaIngresada = new Date(fechaStr);
    return fechaIngresada > hoy;
}

function restablecerAlertas(){
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('destinoError').textContent = "";
    document.getElementById('fechaError').textContent = "";
}