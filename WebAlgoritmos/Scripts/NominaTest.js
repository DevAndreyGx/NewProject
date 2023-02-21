// Declaramos nuestras variables necesarias 
let nombre, sueldo, diasLaborados, id, canEmpleados, sueldoTotal, diaLaboral, horasXtr, horasExt, horasD, horasN, cantHoraX, salud, pension, sindicato, juzgado, libranza, avanceSueldo, totalDedunciones, 
totSuelConDeduc, avanSueldoX, libranzaX, juzgadoX;

const enviarForm = document.getElementById("send");
const nameInput = document.getElementById("name");
const nameSpan = document.getElementById("nombreSpan");
const lastNameInput = document.getElementById("last-name");
const lastNameSpan = document.getElementById("apellidoSpan");
const idInput = document.getElementById("id");
const idSpan = document.getElementById("cedulaSpan");
const salaryInput = document.getElementById("salary");
const salarySpan = document.getElementById("sueldoSpan");
const dayInput = document.getElementById("day");
const daySpan = document.getElementById("diasSpan");

const salarioMinimo = 1160000;
const auxTransporte = 140000;


nombre = "";
sueldo = 0;
dias = 0;
canEmpleados = 0;
sueldoTotal = 0;



    
    enviarForm.addEventListener('click', () => {
      nameSpan.textContent = nameInput.value;
      lastNameSpan.textContent = lastNameInput.value;
      idSpan.textContent = idInput.value;
      salarySpan.textContent = salaryInput.value;
      daySpan.textContent = dayInput.value;
    })
 



//canEmpleados = parseInt(prompt("Escriba la cantidad de empleados: "));

// Creamos una funcion para calcular
/*function calcularNomina(cantEmp) {
    for(var i = 0; i<cantEmp; i++){

        // Solicitamos los datos necesarios para el calculo
        nombre = prompt("Dijite el nombre del empleado "+(i+1)+":");
        id = prompt("Dijite la cedula del empleado "+(i+1)+":")
        sueldo = parseInt(prompt("Dijite el sueldo pactado: "));
        diasLaborados = parseInt(prompt("Dijite la cantidad de dias laborados: "));

        // En este caso vamos a condicionar el salario minimos
        if (sueldo <= (salarioMinimo * 2)) {
            horasXtr = prompt("Indique si el trabajador " + (i + 1) + " tiene horas extras dijite (SI) o (NO)")
            if (horasXtr.toUpperCase() === "SI") {
                horasExt = prompt("Indique (DIA) para horas Diurnas" + '</br>' + "Indique (NOCHE) para horas nocturnas");

                // Condicionamos para horas nocturnas o diurnas
                if (horasExt.toUpperCase() == "DIA") {
                    cantHoraX = parseInt(prompt("Ingrese la cantida de horas extras: "))
                    horasD = ((sueldo / 30) * 0.25)*cantHoraX
                    diaLaboral = parseInt(sueldo / 30);
                    sueldoTotal = (diaLaboral * diasLaborados) + (auxTransporte +horasD);
                } else if (horasExt.toUpperCase() == "NOCHE") {
                    cantHoraX = parseInt(prompt("Ingrese la cantida de horas extras: "))
                    horasN = parseInt((sueldo / 30) * 0.75)*cantHoraX
                    diaLaboral = parseInt(sueldo / 30);
                    sueldoTotal = (diaLaboral * diasLaborados) + (auxTransporte + horasN);
                } else {
                    alert("Dijita una opcion correcta ;(")
                }
                // Calculamos el auxilio de transporte ya que tiene que ser menor a dos salmin
                
            } else if(horasXtr.toUpperCase() === "NO") {
                diaLaboral = parseInt(sueldo / 30);
                sueldoTotal = (diaLaboral * diasLaborados) + auxTransporte;
            } else {
                alert("Dijita una opcion correcta ;(")
            }
        }else {
            diaLaboral = parseInt(sueldo / 30);
            sueldoTotal = diaLaboral * diasLaborados;
        }
        //Finalmente imprimos el resultado
        deducciones(i);
        imprimir();
        addEventListener("click",enviar());
    }
    
}
*/

/*function deducciones(i) {
    
    salud = (sueldoTotal-auxTransporte)*(0.04);
    pension = (sueldoTotal-auxTransporte)*(0.04);
    sindicato = (sueldoTotal-auxTransporte)*(0.01);
    
    preguntamos si el usuario tienen sindicato
    tieSindicato = prompt("El empleado "+(i+1)+" tiene sindicato en la empresa: ")
    if() {
    }
    
    avanSueldoX = prompt("El empleado "+(i+1)+" tiene avance de sueldo dijite (SI) o (N0): ");
    if(avanSueldoX.toUpperCase() == "SI" ) {
        avanceSueldo = parseInt(prompt("Digite la cantidad de sueldo adelantado: "));
    }else if(avanSueldoX.toUpperCase() == "NO") {
        avanceSueldo = 0;
    }else {
        alert("Dijite una opcion correcta");
    }

    juzgadoX = prompt("El empleado " + (i + 1) + " tiene juzgado de sueldo dijite (SI) o (N0): ");
    if(juzgadoX.toUpperCase() == "SI")  {
        juzgado = prompt("Ingrese cantidad de pactado de juzgado del empleado" + (i + 1) +" :");
    } else if (juzgadoX.toUpperCase() == "NO") {
        juzgado = 0;
    } else {
        alert("Dijite una opcion correcta");
    }

    libranzaX = prompt("El empleado " + (i + 1) + " tiene libranza de sueldo dijite (SI) o (N0): ");
    if (libranzaX.toUpperCase() == "SI") {
        libranza = prompt("Ingrese cantidad de pactado de juzgado del empleado " + (i + 1) + " :");
    } else if (libranzaX.toUpperCase() == "NO") {
        libranza = 0;
    } else {
        alert("Dijite una opcion correcta");
    }
    totalDedunciones = parseInt(avanceSueldo + juzgado + libranza + sindicato + pension + salud);
    totSuelConDeduc = parseInt(sueldoTotal - totalDedunciones);
}

/*


function imprimir() {
    document.write()
    document.write("El trabajador " + nombre + " con id: " + id + '</br>');
    document.write()
    document.write("Con dias laborados: " + diasLaborados + '</br>');
    document.write()
    document.write("Con un sueldo: " + sueldo + '</br>');
    if (horasExt === undefined) {
        document.write("Horas extras: Ninguna" + '</br>');
    } else {
        document.write("Horas extras: " + horasExt + '</br>');
    }
    if (cantHoraX === undefined) {
        document.write("Cantidas horas extras: 0" + '</br>')

    } else {
        document.write("Cantidad horas extras: " + cantHoraX + '</br>')
    }
    document.write()
    document.write("Dias trabajados: " + diasLaborados + '</br>');
    document.write()
    document.write("El sueldo devengado del empleado es: " + sueldoTotal + '</br>' + '</br>');
    document.write("==============================================================");
    document.write('</br>');
    document.write('</br>');
    document.write("Deducciones: " + '</br>');
    document.write("Salud: " + salud + '</br>');
    document.write("Pension: " + pension + '</br>');
    document.write("Sindicato: " + sindicato + '</br>');

    if (avanSueldoX === undefined) {
        document.write("Avance sueldo: No adelanto sueldo" + '</br>');
    } else {
        document.write("Avance sueldo adelanto: " + avanceSueldo + '</br>');
    }
    if (juzgadoX === undefined) {
        document.write("Juzgado: No tiene juzgado" + '</br>');
    } else {
        document.write("Juzgado: " + juzgado + '</br>');
    }
    if (libranzaX === undefined) {
        document.write("libranza: No tiene libranza" + '</br>');
    } else {
        document.write("libranza: " + libranza + '</br>');
    }
    document.write("Total deducciones: " + totalDedunciones + '</br>');
    document.write("Total sueldo con deducciones: " + totSuelConDeduc + '</br>');
}


calcularNomina(canEmpleados);
*/

main();