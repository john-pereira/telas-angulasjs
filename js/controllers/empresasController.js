angular.module("controleVEF").controller("empresasController", 
			function ($scope, $http, empresasAPI) {
				$scope.app2 = "Empresas";
				$scope.app5 = "Cadastrar Novas Empresas";


				/* Controle Empresas */
				$scope.empresas = [];

				var carregarEmpresas = function ( ) {
					empresasAPI.getEmpresas().then(function (response){
						$scope.empresas = response.data;
					}).catch(function(response){
						console.error('Erro empresas', response.status, response.data);
					}).finally(function(){
						console.log("Empresas OK");
					});
				};

				$scope.adicionarEmpresas = function ( empresa ) {
					empresasAPI.saveEmpresas(empresa).then(function (response){
						delete $scope.empresa;
						carregarEmpresas();
					}).catch(function(response){
						console.error('Erro ao adicionar empresas', response.status, response.data);
					}).finally(function(){
						console.log("Empresa adiconado");
					});
				};
				$scope.apagarEmpresas = function ( empresas ){
					$scope.empresas = empresas.filter(function( empresa ){
						if (!empresa.selecionado) return empresa;
					});
				};
				$scope.isEmpresaSelecionado = function ( empresas ) {
					return empresas.some(function( empresa ){
						return empresa.selecionado;
					});
				}; 

				carregarEmpresas();
			});