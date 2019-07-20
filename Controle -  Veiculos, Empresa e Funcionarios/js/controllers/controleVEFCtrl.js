angular.module("controleVEF").controller("controleVEFCtrl", 
			function ($scope, $http) {
				$scope.app1 = "Veiculos";
				$scope.app2 = "Empresas";
				$scope.app3 = "Funcionarios";

				/* Controle Veiculos */
				$scope.veiculos = [];

				var carregarVeiculos = function ( ) {
					$http.get("http://localhost:3412/veiculos").then(function (response){
						$scope.veiculos = response.data;
					}).catch(function(response){
						console.error('Erro veiculos', response.status, response.data);
					}).finally(function(){
						console.log("Veiculos OK");
					});
				};
 
				$scope.adicionarVeiculos = function ( veiculo ) {

					$http.post("http://localhost:3412/veiculos", veiculo).then(function (response){
						delete $scope.veiculo;
						carregarVeiculos();
					}).catch(function(response){
						console.error('Erro ao adicionar veiculos', response.status, response.data);
					}).finally(function(){
						console.log("Veiculos Adicionado");
					});
				}; 
				$scope.apagarVeiculos = function (veiculos){
					$scope.veiculos = veiculos.filter(function(veiculo){
						if (!veiculo.selecionado) return veiculo;
					});
				}; 
				$scope.isVeiculoSelecionado = function (veiculos) {
					return veiculos.some(function(veiculo){
						return veiculo.selecionado;
					});
				};

				/* Controle Empresas */
				$scope.empresas = [];

				var carregarEmpresas = function ( ) {
					$http.get("http://localhost:3412/empresas").then(function (response){
						$scope.empresas = response.data;
					}).catch(function(response){
						console.error('Erro empresas', response.status, response.data);
					}).finally(function(){
						console.log("Empresas OK");
					});
				};

				$scope.adicionarEmpresas = function ( empresa ) {
					$http.post("http://localhost:3412/empresas", empresa).then(function (response){
						delete $scope.empresa;
						carregarEmpresas();
					}).catch(function(response){
						console.error('Erro ao adicionar empresas', response.status, response.data);
					}).finally(function(){
						console.log("Empresa adiconado");
					});
				};
				$scope.apagarEmpresas = function (empresas){
					$scope.empresas = empresas.filter(function(empresa){
						if (!empresa.selecionado) return empresa;
					});
				};
				$scope.isEmpresaSelecionado = function (empresas) {
					return empresas.some(function(empresa){
						return empresa.selecionado;
					});
				}; 

				/* Controle Funcionarios */
				$scope.funcionarios = [];

				var carregarFuncionarios = function ( ) {
					$http.get("http://localhost:3412/funcionarios").then(function (response){
						$scope.funcionarios = response.data;
					}).catch(function(response){
						console.error('Erro funcionarios', response.status, response.data);
					}).finally(function(){
						console.log("Funcionarios OK");
					});
				};

				$scope.adicionarFuncionario = function ( funcionario ) {
					$http.post("http://localhost:3412/funcionarios", funcionario).then(function (response){
						delete $scope.funcionario;
						carregarFuncionarios();
					}).catch(function(response){
						console.error('Erro ao adicionar funcionarios', response.status, response.data);
					}).finally(function(){
						console.log("Funcionario adicionado");
					});
				};
				$scope.apagarFuncionario = function ( funcionarios ){
					$scope.funcionarios = funcionarios.filter(function(funcionario){
						if(!funcionario.selecionado) return funcionario;
					});
				};
				$scope.isFuncionarioSelecionado = function (funcionarios){
					return funcionarios.some(function(funcionario){
						return funcionario.selecionado;
					});
				};

				$scope.ordenarPor = function (campo) { 
					$scope.criterioOrdenacao = campo;
					$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
				};

				carregarVeiculos();
				carregarEmpresas();
				carregarFuncionarios();
			});