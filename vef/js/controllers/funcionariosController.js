angular.module("controleVEF").controller("funcionariosController", 
			function ($scope, $http, funcionariosAPI) {
				$scope.app3 = "Funcionarios";
				$scope.app6 = "Cadastrar Novos Funcionarios";

				/* Controle Funcionarios */
				$scope.funcionarios = [];

				var carregarFuncionarios = function ( ) {
					funcionariosAPI.getFuncionarios().then(function (response){
						$scope.funcionarios = response.data;
					}).catch(function(response){
						console.error('Erro funcionarios', response.status, response.data);
					}).finally(function(){
						console.log("Funcionarios OK");
					});
				};

				$scope.adicionarFuncionarios = function ( funcionario ) {
					funcionariosAPI.saveFuncionarios(funcionario).then(function (response){
						delete $scope.funcionario;
						carregarFuncionarios();
					}).catch(function(response){
						console.error('Erro ao adicionar funcionarios', response.status, response.data);
					}).finally(function(){
						console.log("Funcionarios adiconado");
					});
				};
				$scope.apagarFuncionario = function ( funcionarios ){
					$scope.funcionarios = funcionarios.filter(function( funcionario ){
						if(!funcionario.selecionado) return funcionario;
					});
				};
				$scope.isFuncionarioSelecionado = function ( funcionarios ){
					return funcionarios.some(function( funcionario ){
						return funcionario.selecionado;
					});
				};

				$scope.ordenarPor = function (campo) { 
					$scope.criterioOrdenacao = campo;
					$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
				};


				carregarFuncionarios();
			});