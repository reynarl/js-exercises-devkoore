// 1. Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números

let n1 = prompt("introduzca el primer numero:","")
let n2 = prompt("segundo número: ", "")

console.log('Resta:',n1-n2, 'Multiplicación:', n1*n2, 'División:',n1/n2, 'Residuo:',n1%n2, 'Suma:',parseInt(n1)+parseInt(n2))


// 2. Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.

n1 > n2 ? console.log(n1, 'es mayor que', n2) : console.log('El primer número no es mayor')



// 3. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.

let letra1 = prompt("ingresa una letra del abecedario: ")
let letra2 = prompt("ingresa otra letra: ")

let alphabet = 'abcdefghijklmnñopqrstuvwxyz'

if (alphabet.indexOf(letra1) > alphabet.indexOf(letra2)){
   console.log(letra1, 'aparece después de la', letra2)
}else{
   console.log(letra1, 'aparece antes de la', letra2)  
}


/* 4. Pedir 2 variables por prompt:
 - Si a > b dividir a entre b
 - Si a < b sumar a más b
 - si a == b multiplicar ambos numeros
 Imprimir el resultado en consola*/

let a = parseInt(prompt("introduce un número",""))
let b = parseInt(prompt("introduce otro número",""))

if( a === b){
   console.log('a == b, entonces a*b ', a*b)
}else if(a > b){
   console.log('a > b, entonces a/b ', a/b)
}else{
   console.log('a < b, entonces a+b ', a+b)
}



// 5. Pedir al usuario por prompt un numero entre 1 y 100
// - Verificar si es un par o impar e imprimir en resultado en consola

// let num = prompt("ingrese un numero entre el 1 y 100","")

// num%2 === 0 ? console.log(num,'es un numero par') : console.log(num, 'es impar')





// 6. Pedir al usuario 2 numeros
// - Imprimir en consola cual es el menor de los 2
// - Imprimir en consola cual es el mayor de los 2

// let num1 = prompt("ingrese numero:","")
// let num2 = prompt("ingrese otro numero", "")

// num1 > num2 ? console.log(num2, 'es el menor de los dos y', num1, 'es el mayor') : console.log(num1, 'es el menor de los dos y', num2, 'es el mayor')






// 7. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

// let nom = prompt("ingresar nombre:","")
// let peso = prompt("ingresa peso (kg):","") 
// console.log(nom,'pesa',peso*0.165,'kg en la luna')





// 8. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
// -Imprimir en consola las equivalencias en letra su calificación, es decir:
// si es mayor o igual a 90, imprimir "A"
// si es mayor o igual a 80 y menor que 90 , imprimir "B"
// si es mayor o igual a 70 y menor que 80 , imprimir "C"
// si es mayor o igual a 60 y menor que 70 , imprimir "D"
// si es mayor o igual a 50 y menor que 60 , imprimir "E"
// si es menor 50 , imprimir "F"

// let calif = prompt("ingresa una calificacion (0 a 100)")
// if(calif >= 90 && calif <= 100){
//    console.log('calificación: A')
// }else if(calif >=80 && calif < 90){
//    console.log('calificación: B')
// }else if(calif >=70 && calif < 80){
//    console.log('calificación: C')
// }else if(calif >=60 && calif < 70){
//    console.log('calificación: D')
// }else if(calif >=50 && calif < 60){
//    console.log('calificación: E')
// }else{
//    console.log('calificación: F')
// }