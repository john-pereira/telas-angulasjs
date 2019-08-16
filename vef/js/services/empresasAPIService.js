angular.module("controleVEF").factory("empresasAPI", function ($http, config){
	var _getEmpresas = function () {
		return $http.get(config.baseURL + "/empresas");
	};

	var _saveEmpresas = function (empresa) {
		return $http.post(config.baseURL + "/empresas", empresa);
	};

	return {
		getEmpresas: _getEmpresas,
		saveEmpresas: _saveEmpresas
	};

});