angular.module("controleVEF").factory("veiculosAPI", function ($http, config){
	var _getVeiculos = function () {
		return $http.get(config.baseURL + "/veiculos");
	};

	var _saveVeiculos = function (veiculo) {
		return $http.post(config.baseURL + "/veiculos", veiculo);
	};

	return {
		getVeiculos: _getVeiculos,
		saveVeiculos: _saveVeiculos
	};

});