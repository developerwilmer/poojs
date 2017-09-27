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
	Arrays.prototype.obtenerElemento = function(arreglo, indice) {
		return arreglo[indice];
	};
	Arrays.prototype.intercambio = function(arreglo, pos, value) {
		arreglo[pos] = value;
	};
	Arrays.prototype.ordenarBurbuja = function() {
		for(var i = 1; i < this.contar(this.getMyArreglo()); i++){
			for(var j = 0; j < this.contar(this.getMyArreglo()) - 1; j++){
				if(this.obtenerElemento(this.getMyArreglo(), j) > this.obtenerElemento(this.getMyArreglo(), j + 1)){

				}
			}
		}
	};
}