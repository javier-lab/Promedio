    
    let Tabletwo = document.getElementById("Tabletwo")
    
    let boton = document.getElementById("boton1");
    let boton2 = document.getElementById("boton2");
    let promediota = document.getElementById("Promediota")
    
    //obtener el texto
    let textNombre = document.getElementById("Materia");
    let textNota = document.getElementById("Nota");
    let arreglo=[];
    
    
    boton.addEventListener("click", () => {

               
        //   let textnumber = document.getElementById("number");


          let Materia1= textNombre.value;

          if (Materia1==="") {
            alert("No se pueden crear materias sin texto!");
            return;
          }

          let Nota1= textNota.value;

          if (Nota1 === "") {
            alert("No es posible crear notas sin valores");
            return;
          }

          if (Nota1 <0) {
            alert("Valor invalido");
            return; 
            
          }else if (Nota1 > 5) {
            alert("Valor invalido");
            return;
          }



          //   let number1= textnumber.value;
          //crear variable para crear un nuevo td
          let tr = document.createElement("tr")
          let td = document.createElement("td");
          //que va a tener el td?
          td.textContent = Materia1;
          


          arreglo.push(textNota.value);
              
          let td1= document.createElement("td");
          let td2=document.createElement("td");
          let botoneliminar=document.createElement("button")
          botoneliminar.textContent="X";
          td2.appendChild(botoneliminar);

          botoneliminar.addEventListener("click", (evento) => {
            let elemento = evento.target;
            let td2 = elemento.parentElement;

            let padre=td2.parentElement;

            padre.remove();
     
          })
          
          
    
          td1.textContent = Nota1;
          Tabletwo.appendChild(tr)
    
          tr.appendChild(td);
          
    
          textNota.value="";
          //aqui es como agregar el td a la tabla
          tr.appendChild(td1);
          textNombre.value="";

          tr.appendChild(td2);
         


          if (Nota1 === 0) {
            td1.style.color="red";
            return; 
                
          }else if (Nota1 >=0 && Nota1 <= 2.5) {
            td1.style.color="red";

          }else if (Nota1 >= 2.6 && Nota1 <= 2.9){
            td1.style.color="orange";
            
          }else if (Nota1 >= 3.0 && Nota1<= 5){
            td1.style.color="green"
          }else{} 
             
      });

      //Eliminar comillas y calcular promedio
      boton2.addEventListener("click", () => {
           let arraySinComas = arreglo.map( elemento => elemento.split(',')).flat();
           let arraySinComillas = arraySinComas.map( elemento => parseFloat(elemento));
           let suma= arraySinComillas.reduce((a,b) => a+b,);
           let lon=arreglo.length;
           let res=suma / lon;
           let tdpro=document.createElement("td");
           tdpro.textContent= res;
           promediota.appendChild(tdpro);
                  
                 });



