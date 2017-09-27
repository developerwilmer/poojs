var Personas = function()
{
	var persona;
	Personas.prototype.agregar = function(nombre, apellido, edad, profesion, ciudad, nota1, nota2) {
		persona = new Object();

		persona.nombre = nombre;
		persona.apellido = apellido;
		persona.edad = edad;
		persona.profesion = profesion;
		persona.ciudad = ciudad;
		persona.nota1 = nota1;
		persona.nota2 = nota2;
	};

	Personas.prototype.getPersona = function() {
		return persona;
	};
}