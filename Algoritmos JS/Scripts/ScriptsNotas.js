let nota1,nota2, nota3, resultado, promedio

nota1 = parseInt(prompt("Ingese tu primera nota"))
nota2 = parseInt(prompt("Ingresa tu segunda nota"))
nota3 = parseInt(prompt("Ingresa tu tercera nota"))

resultado = (nota1 + nota2 + nota3)/3
promedio = resultado

alert("Tu nota final es: "+promedio)

if(promedio<70){
    document.write("Reprobaste :( tu nota final es: "+promedio)
}else if(promedio>=70 &&  promedio<=100){
    document.write("Aprobaste :) tu nota final es: " + promedio)
}else {
    alert("Ingresa datos validos")
    document.write("Eres chistosito verdad")
}