let num1, num2

num1 = prompt("Ingresa valor1")
num2 = prompt("Ingresa valor2")

function numeros(a,b){
    if(b>a){
        document.write("El numero mayor es: ",b)
    }else if(a>b){
        document.write("El numero mayor es: ",a)
    }else if(a == b){
        document.write("Los numeros son iguales")
    }
}
numeros(num1,num2)
