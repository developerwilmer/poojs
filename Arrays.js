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
	Arrays.prototype.intercambio = function(arreglo, indice, valor) {
		arreglo[indice] = valor;
	};
	Arrays.prototype.ordenarBurbuja = function(campo) {
		switch(campo){
			case 'edad' :
				for(var i = 1; i < this.contar(this.getMyArreglo()); i++){
					for(var j = 0; j < this.contar(this.getMyArreglo()) - 1; j++){
						if(this.getMyArreglo()[j].edad > this.getMyArreglo()[j + 1].edad){
							var aux = this.obtenerElemento(this.getMyArreglo(), j + 1);
							this.intercambio(this.getMyArreglo(), j + 1, this.obtenerElemento(this.getMyArreglo(), j));
							this.intercambio(this.getMyArreglo(), j, aux);
						}
					}
				}
			break;
		}
	};
}