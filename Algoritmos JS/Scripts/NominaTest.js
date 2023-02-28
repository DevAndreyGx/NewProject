// Declaramos nuestras variables necesarias 
let canEmpleados, sueldoTotal, horaLaboralDia, horaLaboral, horaXDia, horaXNoche, salud, horaDXtot, horaNXtot ,pension, sindicato, juzgado, libranza, avanceSueldo, totalDedunciones, 
totSuelConDeduc, avanSueldoX, libranzaX, juzgadoX;

let horass, horasx;


// We're going to create new variables to bring data from DOM
// Table items  
const salarioMinimo = 1160000;
const auxTransporte = 140000;


const td1 = document.getElementById("td1");
const td2 = document.getElementById("td2");
const td3 = document.getElementById("td3");
const td4 = document.getElementById("td4");
const td5 = document.getElementById("td5");
const td6 = document.getElementById("td6");
const td7 = document.getElementById("td7");
const td8 = document.getElementById("td8");
const td9 = document.getElementById("td9");
const td10 = document.getElementById("td10");
const td11 = document.getElementById("td11");
const td12 = document.getElementById("td12");
const td13 = document.getElementById("td13");
const td14 = document.getElementById("td14");

//Form items
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const idInput = document.getElementById("id");
const salaryInput = document.getElementById("salary");
const dayInput = document.getElementById("day");


// to get the id send button
const enviarForm = document.getElementById("send");

const siInput = document.getElementById("yes");
const noInput = document.getElementById("no");

// To get the container 
const newContainer = document.getElementById("container");
const newContainerInLa = document.getElementById("container-inputs-labels");
const newContainerNewInput = document.getElementById("container-inputs-horas");

// We create new buttons to put them on DOM 
const nuevoInput1 = document.createElement("input");
const nuevoInput2 = document.createElement("input");
const nuevoInput3 = document.createElement("input");
const nuevoLabel = document.createElement("label");
const nuevoLabel1 = document.createElement("label");
const nuevoLabel2 = document.createElement("label");
const nuevoLabel3 = document.createElement("label");

// We create new buttons to put them on DOM night part

const nuevoInput4 = document.createElement("input");
const nuevoLabel4 = document.createElement("label");

// We create new buttons to put them on DOM day part

const nuevoInput5 = document.createElement("input");
const nuevoLabel5 = document.createElement("label");

// We create new buttons to put them on DOM day & night part

const nuevoInput6 = document.createElement("input");
const nuevoInput7 = document.createElement("input");
const nuevoLabel6 = document.createElement("label");
const nuevoLabel7 = document.createElement("label");




nombre = "";
sueldo = 0;
dias = 0;
canEmpleados = 0;
sueldoTotal = 0;


// We disapeard this night part 


const y = document.getElementById("yyy");
y.style.display = 'none';
td8.style.display = 'none';

// We disapeard this day part 

const x = document.getElementById("xxx");
x.style.display = 'none';
td9.style.display = 'none';

// We disapeard this ext day hours
const z = document.getElementById("zzz");
z.style.display = 'none';
td13.style.display = 'none';

// We disapeard this ext night hours
const a = document.getElementById("aaa");
a.style.display = 'none';
td14.style.display = 'none';

function calcular() {
    // We'll have to solve this calculate 
    // let's calculate the salary one hour
    horaLaboral = Math.floor((((salaryInput.value) / 30) / 8));
    td11.textContent = horaLaboral;
    console.log("Hora laboral de un dia: " + horaLaboral);

    // let's calculate the salary hour all day 
    horaLaboralDia = (salaryInput.value)/30;

    console.log("Hora de un dia laboral sin auxilio de transporte: "+horaLaboralDia);
    td10.textContent = Math.floor(horaLaboralDia);

    if (salaryInput.value <= (salarioMinimo * 2)) {
        
        td12.textContent = auxTransporte;
        
        

    }else {
        
        td12.textContent = 0;
    }
}


function decidir() {
    
    if(siInput.checked) {
        td6.innerHTML = "SI";  
        // We're going to create new labels and inputs 
            nuevoInput1.setAttribute("type", 'radio');
            nuevoInput1.setAttribute("name", "nuevo-input1");
            nuevoInput1.setAttribute("id", "nuevo-input1");

            
            nuevoInput2.setAttribute("type", "radio");
            nuevoInput2.setAttribute("name" , "nuevo-input1");
            nuevoInput2.setAttribute("id", "nuevo-input2");

            nuevoInput3.setAttribute("type", "radio");
            nuevoInput3.setAttribute("name", "nuevo-input1");
            nuevoInput3.setAttribute("id", "nuevo-input3");

           
            nuevoLabel.setAttribute("for", "nuevo-input12");
            nuevoLabel.textContent = "Tipo horas: ";
        
            
            nuevoLabel1.setAttribute("for", "nuevo-input1");
            nuevoLabel1.textContent = "Nocturnas";

          
            nuevoLabel2.setAttribute("for", "nuevo-input2");
            nuevoLabel2.textContent = "Diurnas";

            nuevoLabel3.setAttribute("for", "nuevo-input3");
            nuevoLabel3.textContent = "Ambas";

            newContainer.appendChild(nuevoLabel);
            newContainerInLa.appendChild(nuevoLabel1);
            newContainerInLa.appendChild(nuevoInput1);
            newContainerInLa.appendChild(nuevoLabel2);
            newContainerInLa.appendChild(nuevoInput2);
            newContainerInLa.appendChild(nuevoLabel3);
            newContainerInLa.appendChild(nuevoInput3);
            // We check the inputs with checked 
            if (nuevoInput1.checked) {

                td7.innerHTML = "Nocturnas";
                y.style.display = "block";
                td8.style.display = "block";
                td8.textContent = 0;

                nuevoInput4.setAttribute("type", "text");
                nuevoInput4.setAttribute("name", "nuevo-input3");
                nuevoInput4.setAttribute("placeholder", "Nocturnas")
                nuevoInput4.setAttribute("id", "newInput5");

                


                nuevoLabel4.setAttribute("for", "nuevo-input3");
                nuevoLabel4.textContent = "Cantidad de horas Nocturnas: "

                newContainerNewInput.appendChild(nuevoLabel4);
                newContainerNewInput.appendChild(nuevoInput4);

                const inputTotd = document.getElementById("newInput5");
                td8.textContent = inputTotd.value;
                horaXNoche = horaLaboral * 0.75;

                a.style.display = "block";
                td14.style.display = "block";
                td14.textContent = 0;

                horaNXtot = horaLaboral + horaXNoche;
                td14.textContent = (horaNXtot)*nuevoInput4.value;
                
                
               
            }else if(nuevoInput2.checked) {
                td7.innerHTML = "Diurnas";
                x.style.display = "block";
                td9.style.display = "block";
                td9.textContent = 0;

                nuevoInput5.setAttribute("type", "text");
                nuevoInput5.setAttribute("name", "nuevo-input4");
                nuevoInput5.setAttribute("placeholder", "Diurnas")
                nuevoInput5.setAttribute("id", "newInput6");
               
                
                nuevoLabel5.setAttribute("for", "nuevo-input4");
                nuevoLabel5.textContent = "Cantidad de horas Diurnas: ";

                newContainerNewInput.appendChild(nuevoLabel5);
                newContainerNewInput.appendChild(nuevoInput5);

                const inputTotd1 = document.getElementById("newInput6");

                td9.textContent = inputTotd1.value;
                
                horaXDia = horaLaboral * 0.25;

                z.style.display = "block";
                td13.style.display = "block";
                td13.textContent = 0;

                horaDXtot = horaLaboral + horaXDia;
                td13.textContent = (horaDXtot) * nuevoInput5.value;

                
                
                
            }else if(nuevoInput3.checked){
                td7.innerHTML = "Diurnas & Nocturnas";
                y.style.display = "block";
                td8.style.display = "block";
                td8.textContent = 0;

                x.style.display = "block";
                td9.style.display = "block";
                td9.textContent = 0;

                nuevoInput6.setAttribute("type", "text");
                nuevoInput6.setAttribute("name", "nuevo-input5");
                nuevoInput6.setAttribute("placeholder", "Nocturnas")
                nuevoInput6.setAttribute("id", "nuevo-input6")

                nuevoInput7.setAttribute("type", "text");
                nuevoInput7.setAttribute("name", "nuevo-input5");
                nuevoInput7.setAttribute("placeholder", "Diurnas")
                nuevoInput7.setAttribute("id", "nuevo-input7")

                nuevoLabel6.setAttribute("for", "nuevo-input5");
                nuevoLabel6.textContent = "Cantidad de horas Nocturnas: ";

                nuevoLabel7.setAttribute("for", "nuevo-input5");
                nuevoLabel7.textContent = "Cantidad de horas Diurnas: " 

                newContainerNewInput.appendChild(nuevoLabel6);
                newContainerNewInput.appendChild(nuevoInput6);
                '</br>'
                newContainerNewInput.appendChild(nuevoLabel7);
                newContainerNewInput.appendChild(nuevoInput7);

                const inputTotd2 = document.getElementById("nuevo-input6");
                td8.textContent = inputTotd2.value;

                const inputTotd3 = document.getElementById("nuevo-input7");
                td9.textContent = inputTotd3.value;

                // We appeard again
                z.style.display = "block";
                td13.style.display = "block";
                td13.textContent = 0;

                a.style.display = "block";
                td14.style.display = "block";
                td14.textContent = 0;

                //horaNXtot = horaLaboral + horaXNoche;
                horasx = (horaLaboral) +(horaLaboral*0.75);
                console.log(horaNXtot)
                td14.textContent = (horasx) * nuevoInput6.value;
                //td14.textContent = 0;


                //horaDXtot = horaLaboral + horaXDia;
                
                horass = (horaLaboral)+(horaLaboral*0.25);
                td13.textContent = (horass)*nuevoInput7.value;





            }else {
                td7.innerHTML = "Ninguna";
            }
        
    }else if(noInput.checked) {
        td6.innerHTML = "NO";
        td7.innerHTML = "Ninguna"
    }else {
        alert("Ingresa si O no (HORAS EXTRAS)");
        td6.innerHTML = "DATO NO VALIDO";
        td7.innerHTML = "Ninguna"
    }
}

// We have to create an arrow function to send information to the table
enviarForm.addEventListener('click', () => {
    td1.textContent = nameInput.value;
    td2.textContent = lastNameInput.value;
    td3.textContent = idInput.value;
    td4.textContent = salaryInput.value;
    td5.textContent = dayInput.value;
    decidir();
    calcular();
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
// by: 

//       █████╗  ███╗   ███╗  ██████╗  ██████╗ 
//      ██╔══██╗ ████╗  ████║ ██╔═══██╗ ██╔══██╗
//      ███████║ ██╔██╗ ██╔██║ ██║   ██║ ██████╔╝
//      ██╔══██║ ██║╚██╗██║╚═╝ ██║▄▄ ██║ ██╔══██╗
//      ██║  ██║ ██║ ╚████║    ╚██████╔╝ ██║  ██║
//      ╚═╝  ╚═╝ ╚═╝  ╚═══╝     ╚══▀▀═╝  ╚═╝  ╚═╝

//                             ██╗  ██╗ 
 //                            ╚██╗██╔╝ 
 //                             ╚███╔╝  
   //                           ██╔██╗  
     //                        ██╔╝ ██╗ 
       //                      ╚═╝  ╚═╝ 