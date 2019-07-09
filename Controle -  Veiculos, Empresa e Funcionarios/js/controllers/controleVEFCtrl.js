angular.module("controleVEF").controller("controleVEFCtrl", 
			function ($scope) {
				$scope.app1 = "Veiculos";
				$scope.app2 = "Empresas";
				$scope.app3 = "Funcionarios";


				$scope.veiculos = [
					{placa: "MPQ-1622", ano: new Date(), chassi: "52293448763", dataCadastro: "05/07/2019", modelo: "Engesa 4.0 Diesel", preco: 22000},
					{placa: "MYX-1042", ano: new Date(), chassi: "88570140289", dataCadastro: "05/07/2019", modelo: "Buggy  1.6 8V 58cv", preco: 22000}
				];
				$scope.adicionarVeiculos = function ( veiculo ) {
					$scope.veiculos.push(angular.copy(veiculo));
					delete $scope.veiculo;
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


				$scope.empresas = [
					{razaoSocial: "Sorveteria Arco Iris", cnpj: "29.166.295/0001-52", inscricaoEstadual: "52293448763", dataAbertura: "20/07/2019", estado: "MG", cidade: "Ipatinga", telefone: "3822-5015"},
					{razaoSocial: "JD Contabilidade", cnpj: "31.771.465/0001-70", inscricaoEstadual: "88570140289", dataAbertura: "20/07/2019", estado: "MG", cidade: "Ipatinga", telefone: "3822-5015"}
				];
				$scope.adicionarEmpresas = function ( empresa ) {
					$scope.empresas.push(angular.copy(empresa));
					delete $scope.empresa;
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


				$scope.funcionarios = [
					{nome: "John", cpf: "109.069.256-06", dataNascimento: "20/07/1990", login: "jon", senha: "123456"},
					{nome: "Ana", cpf: "696.555.522-22", dataNascimento: "21/01/1999", login: "ana", senha: "123345555"},
					{nome: "Carlos", cpf: "788.888.576-66", dataNascimento: "11/08/1985", login: "car", senha: "sdasd"},
					{nome: "Bruna", cpf: "112.212.346-99", dataNascimento: "22/11/1979", login: "brun", senha: "123qwewq456"}
				];
				$scope.adicionarFuncionario = function ( funcionario ) {
					$scope.funcionarios.push(angular.copy(funcionario));
					delete $scope.funcionario;
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

			});