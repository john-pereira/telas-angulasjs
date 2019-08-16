angular.module("controleVEF").directive("uiCpf", function(){
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl){
			var _formatCpf = function (cpf){
				/*Limpa a placa para um formato com apenas números, usando uma expressão regular e replace para substuir tudo que não for 0-9 para vazio*/	
				cpf = cpf.replace(/[^0-9]+/g, "");
				/*Depois dos três primeiros caracteres adiciona a barra '-'*/
				if(cpf.length > 3) {
					cpf = cpf.substring(0,3) + "." + cpf.substring(3);
				}
				if(cpf.length > 6){
					cpf = cpf.substring(0,7) + "." + cpf.substring(7);
				}
				if(cpf.length > 11){
					cpf = cpf.substring(0,11) + "-" + cpf.substring(11,13);
				}

				return cpf;
			};

			element.bind("keyup", function(){
					ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
					/*terceira operação da API de ngmodel que redenriza na tela*/
					ctrl.$render();
			});	

		}
	};

});