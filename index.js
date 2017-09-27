window.onload = function(){
	//agregar presionando enter
	document.addEventListener('keyup', function(e){
		if(e.keyCode == 13 /* es decir si se presionó la tecla enter*/){
			f_agregar();
		}
	});

	//agregar haciendo clic
	var agregar_btn = document.querySelector("#agregar_btn").addEventListener("click", f_agregar);

	function f_agregar()
	{
		var nombre = new String(document.querySelector("#nombre").value);
	    var apellido = new String(document.querySelector("#apellido").value);
	    var edad = new String(document.querySelector("#edad").value);
	    var profesion = new String(document.querySelector("#profesion").value);
	    var ciudad = new String(document.querySelector("#ciudad").value);
	    var nota1 = new String(document.querySelector("#nota1").value);
	    var nota2 = new String(document.querySelector("#nota2").value);

		var arreglo = new Arrays();
		var vista = new Vista();
	    if(nombre.trim().length == 0){
	    	alert("El campo nombre no debe estar vacio");
	    }else if(apellido.trim().length == 0){
	    	alert("El campo apellido no debe estar vacio");
	    }else if(edad.trim().length == 0){
	    	alert("El campo edad no debe estar vacio");
	    }else if(profesion.trim().length == 0){
	    	alert("El campo profesion no debe estar vacio");
	    }else if(ciudad.trim().length == 0){
	    	alert("El campo ciudad no debe estar vacio");
	    }else if(nota1.trim().length == 0){
	    	alert("El campo nota 1 no debe estar vacio");
	    }else if(nota2.trim().length == 0){
	    	alert("El campo nota 2 no debe estar vacio");
	    }else{
	    	var persona = new Personas();
	    	persona.agregar(nombre, apellido, edad, profesion, ciudad, nota1, nota2);
	    	arreglo.agregarDato(persona.getPersona());
	    	vista.mostrar(arreglo.getMyArreglo(), '#desordenado');

	    	if(arreglo.contar(arreglo.getMyArreglo()) > 1){
	    		document.querySelector('#controlOrdenar').style.display = "initial";
	    		document.querySelector('#ordenar').addEventListener('click', function(){
	    			var indexMetodo = document.querySelector('#metodo').selectedIndex;
	    			if(indexMetodo == 0){
	    				alert("Seleccione un metodo");
	    			}else{
	    				var indexCampo = document.querySelector('#por').selectedIndex;
	    				if(indexCampo == 0){
	    					alert("Selecciona un campo para ordenar");
	    				}else{
	    					if(indexCampo == 1){
	    						
	    					}
	    				}
	    			}
	    		})
	    	}
	    }
	}
}