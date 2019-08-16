angular.module("controleVEF").factory("funcionariosAPI", function ($http, config) {
	var _getFuncionarios = function () {
		return $http.get(config.baseURL + "/funcionarios");
	};

	var _saveFuncionarios = function ( funcionario ) {
		return $http.post(config.baseURL + "/funcionarios", funcionario);
	};

	return {
		getFuncionarios: _getFuncionarios,
		saveFuncionarios: _saveFuncionarios
	};
	
});