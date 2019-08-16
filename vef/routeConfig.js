angular.module("controleVEF").config(function ($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider.when("/index", {
  	templateUrl: "view/home.html",
  });

  /*Veiculos*/
  $routeProvider.when("/veiculos", {
  	templateUrl: "view/veiculos.html",
  	controller: "veiculosController"
  });
  $routeProvider.when("/addVeiculos", {
  	templateUrl: "view/addVeiculos.html",
  	controller: "veiculosController"
  });

  /*Empresas*/
  $routeProvider.when("/empresas", {
  	templateUrl: "view/empresas.html",
  	controller: "empresasController"
  });
  $routeProvider.when("/addEmpresas", {
  	templateUrl: "view/addEmpresas.html",
  	controller: "empresasController"
  });

  /*Funcionarios*/
  $routeProvider.when("/funcionarios", {
  	templateUrl: "view/funcionarios.html",
  	controller: "funcionariosController"
  });
   $routeProvider.when("/addFuncionarios", {
  	templateUrl: "view/addFuncionarios.html",
  	controller: "funcionariosController"
  });


  $routeProvider.otherwise({redirectTo: "/index"});
});