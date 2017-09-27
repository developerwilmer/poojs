var Vista = function()
{
	Vista.prototype.mostrar = function(myArreglo, tabla) {
		var tbody = document.querySelector(tabla + ' tbody');
		tbody.innerHTML = "";
		myArreglo.forEach(function (elemento, indice, array) {
			var hilera = document.createElement("tr");
			var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.nombre);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.apellido);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.edad);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.profesion);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.ciudad);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.nota1);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    var celda = document.createElement("td");
		    var textoCelda = document.createTextNode(elemento.nota2);
		    celda.appendChild(textoCelda);
		    hilera.appendChild(celda);

		    tbody.appendChild(hilera)
		})
		document.querySelector(tabla).style.display = "initial";
	};
}