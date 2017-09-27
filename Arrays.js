var myArreglo = new Array();
var Arrays = function()
{
	Arrays.prototype.agregarDato = function(persona) {
		myArreglo.push(persona);
	};
	Arrays.prototype.getMyArreglo = function() {
		return myArreglo;
	};
	Arrays.prototype.contar = function(arreglo) {
		return arreglo.length;
	};
	Arrays.prototype.intercambio = function(arreglo, pos, value) {
		arreglo[pos] = value;
	};
	Arrays.prototype.ordenarBurbuja = function() {
		
	};
}