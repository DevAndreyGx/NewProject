let id, nota, nombre, canNotas, asignatura;

id = 0;
nota = 0;
nombre = "";
asignatura = "";
canNotas = 0;
notasTotal = 0;

nombre = prompt("Ingresa tu nombre: ");
id = parseInt(prompt("Ingresa tu id: "));
canNotas = parseInt(prompt("Ingresa la cantidad de notas: "));

function calcular(name,asignatura,cantidad,id) {
    for(var i = 0; i<cantidad; i++) {
        nota = parseInt(prompt("Ingresa tu nota "+(i+1)+": "));
        notasTotal += (nota)/canNotas;
        document.write("La nota "+(i+1)+" es: "+nota+'</br>');
    }
    document.write('</br>')
    if(notasTotal>=0 && notasTotal<70) {

        document.write("El estudiante "+name+" con id:"+id+'</br>'+"Estado Estudiante: Reprobado "+'</br>'+"Asingatura: "+asignatura+'</br>'+"Nota Final: "+notasTotal);
    }else if(notasTotal<=100) {
        document.write("El estudiante "+name+" con id:"+id+'</br>'+"Estado Estudiante: Aprobado "+'</br>'+"Asignatura:"+asignatura+'</br>'+"Nota Final: "+notasTotal);
    }else {
        alert("Ingresa valores validos(NO MAYOR A 100)");
    }
    
}
calcular(nombre,"Matemticas",canNotas,id);