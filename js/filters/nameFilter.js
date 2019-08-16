angular.module("controleVEF").filter("name", function () {
	return function ( input ) {
		var listaDeNomes = input.split (" ");
		var listaDeNomesFormatada = listaDeNomes.map(function (nome){
			if (/(da|de)/.test(nome)) return nome;
			return nome.chatAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaDeNomesFormatada.join(" ");
	};
});