/* 
   Crear un algoritmo que permita determinar
   la calificacion en letras de un alumno 

   si la nota se encuentra entre 100 a 90 = A
   si la nota se encuentra entre 80 y 89 = B
   si la nota se encuentra entre 70 y 79 = C
   si la nota se encuentra entre 60 y 69 = D
   si la nota es inferior a 60 = F
*/

let nota=70; 
let notaLetra = '';

if (nota >=90){ 
notaLetra = "A";
}else if(nota >=80){
   notaLetra = "B";
}else if (nota >=70){
   notaLetra = "C";
}else if (nota >=60){
   notaLetra = "D";
} else {
   notaLetra = "F"; 
}

console.log(nota +" "+"Es igual a " + notaLetra); 