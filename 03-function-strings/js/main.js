
let nombre = prompt("Nombre:","")
let apellidos = prompt("Apellidos","")
let numValues = /^[0-9]+$/
let vocals = /[aeiouAEIOU]/g
let cons = /[bcdfghjklmnñpqrstvwxyz]/gi

// EJERCICIO 1
// Reciba en una variable el nombre y en otra los apellidos y me devuelva 
// en una sola cadena el nombre en minuscula y los apellidos mayusculas.
function nombreCompleto(nombre,apellidos){
   let completo = nombre.toLowerCase() + ' ' + apellidos.toUpperCase()
   return completo
}

// EJERCICIO 2: Obtener el nombre completo e indicarle cuantos caracteres tiene su nombre.
function caracteres(nombre,apellidos){
   let result = nombre.length + apellidos.length
   return result
}

// EJERCICIO 3
//obtener el nombre completo. Contar cuántos caracteres tiene
// <15 caracteres, indicar su nombre es mmuy corto >15 caracteres indicar que su nombre es muy largo
function avisoNombre(nombre,apellidos){
   let cantidad = nombre.length+apellidos.length
   let aviso = cantidad>=15 ? 'Tu nombre es muy largo' : 'Tu nombre es muy corto'
   return aviso
}

// EJERCICIOs 4 -obtener el nombre completo del usuario -contar cuántas vocales tiene.
function vocales(nombre, apellidos){
   let extrae = nombre.match(vocals) + apellidos.match(vocals)
   extrae = extrae.replace(/[,]/g, "")
   return extrae.length
}

/*INCOMPLETOO!!!
EJERCICIO 6: Pedir el nombre de una persona Verificar si el nombre termina con una vocal
imprimir que Tu nombre termina con ${vocal} Sino imprimir que Tu nombre termina con ${consonante}
-> Pedro -> Tu nombre termina con o  */
// function nombreVocal(nombre){
//    // let vocal = 'a'
//    // let resp = nombre.endsWith(vocal)===true ? 'tu nombre termina con'+vocal : 'es consonante'
//    return console.log(resp)
// }

// nombreVocal(nombre)


// ---------------------------------------GENERAL-------------------------------------------
if(nombre.match(numValues) || apellidos.match(numValues)){
   alert ("No puedes introducir números")
}else{
   console.log(nombreCompleto(nombre,apellidos))
   console.log('Cantidad de caracteres: '+caracteres(nombre,apellidos))
   console.log(avisoNombre(nombre, apellidos))
   console.log('Vocales en tu nombre: '+vocales(nombre, apellidos))
}

/*EJERCICIO 5: Del texto. Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas por "Koder"*/
let texto = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado'

let buscar = texto.match(/estudiante/g)
buscar = buscar.length
let nuevoTxt = texto.replace(/estudiante/g,'koder')
console.log(`Cantidad de palabras estudiante:${buscar}`)
console.log(nuevoTxt)

/* EJERCICIO 7: Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
input:
   palabra a buscar: 'Hola'
   frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
   OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'*/

function coincidencias(){
   let frase = prompt('Ingresa frase: ','')
   let buscar = prompt('Palabra a buscar:','')
   let busca = new RegExp(buscar,'gi') //RegExp->pasar una cadena g->buscar todas las palabras i-> mayuscula o minuscula
   return console.log(`El número de coincidencias de ${buscar} es de ${frase.match(busca).length} veces`)
}
// coincidencias()


/* EJERCICIO 8: Pedir al usuario una oracion. Imprimir un string con todas las vocales
Imprimir un string con todas las consonantes */

function vocalesConsonantes(){
   let oracion = prompt('Ingresa una oración: ','')
   oracion = oracion.toLowerCase()
   let vocales = oracion.match(vocals)
   let consonantes = oracion.match(cons)
   let cadena = console.log(`${oracion}\nVocales en la oracion: ${vocales}\n Consonantes: ${consonantes}`)
   return cadena
}
// vocalesConsonantes()


/* EJERCICIO 9 Comparar 2 string, y determinar cual de los dos es el más largo
input: "string 1", "Some large string" Output: "el string {} es el más largo" */

function comparaString(){
   let cadena = prompt('Ingresa una oracion', '')
   let cadenaDos = prompt('Ingresa otra oracion:', '')
   let compara = cadena.length>cadenaDos.length ? `el string ${cadena} es mas largo` : `El string ${cadenaDos} es mas largo`
   return console.log(compara)
}
// comparaString()