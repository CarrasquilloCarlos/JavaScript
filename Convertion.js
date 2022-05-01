//Carlos Carrasquillo//
//28 de abril de 2022//
//Tarea de assessment 3.2//
//Paso 1: definir la funcion y sus variables//

     function Temperatura() {
        var degC = document.getElementById("celcio").value;
        var degF;
    

         degF = 32 + (degC * 9/5); 
         document.getElementById("convert").innerHTML = degC + " es " + degF + " grados Fahrenheit ";


     }
     function Borrar(){
         document.getElementById("convert").innerHTML ="";
         document.getElementById("celcio").value="";
     }