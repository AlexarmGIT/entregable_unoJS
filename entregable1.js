for(let i = 1; i <= 5; i++){
      let registro = prompt("ingresa tu nombre o ESC para terminar");   

        if (registro === null || registro === '')
        {
        alert("Accion incorrecta, Ingresa tu nombre");
        }

        else if(registro) { 
                alert("tu turno asignado N° " + i + " fue registrado con el nombre " + registro);
        }
        
        else if (registro == "ESC"){ 
            break
            }
    }   
 

