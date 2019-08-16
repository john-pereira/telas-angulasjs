angular.module("controleVEF").controller("veiculosController", 
			function ($scope, $http, veiculosAPI) {
				$scope.app1 = "Veiculos";
				$scope.app4 = "Cadastrar Novos Veiculos";

				/* Controle Veiculos */
				$scope.veiculos = [];

				var carregarVeiculos = function ( ) {
					veiculosAPI.getVeiculos().then(function (response){
						$scope.veiculos = response.data;
					}).catch(function(response){
						console.error('Erro veiculos', response.status, response.data);
					}).finally(function(){
						console.log("Veiculos OK");
					});
				};
				$scope.adicionarVeiculos = function ( veiculo ) {
					// veiculo.serial = serialGenerator.generate(); 
					veiculosAPI.saveVeiculos(veiculo).then(function (response){
						delete $scope.veiculo;
						carregarVeiculos();
					}).catch(function(response){
						console.error('Erro ao adicionar veiculos', response.status, response.data);
					}).finally(function(){
						console.log("Veiculos Adicionado");
					});
				};

				$scope.apagarVeiculos = function ( veiculos ){
					$scope.veiculos = veiculos.filter(function( veiculo ){
						if (!veiculo.selecionado) return veiculo;
					});
				}; 
				$scope.isVeiculoSelecionado = function ( veiculos ) {
					return veiculos.some(function( veiculo ){
						return veiculo.selecionado;
					});
				};

				carregarVeiculos();
			});