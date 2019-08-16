angular.module("controleVEF").directive("uiPlaca", function(){
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl){
			var _formatPlaca = function (placa){
				/*Limpa a placa para um formato com apenas números, usando uma expressão regular e replace para substuir tudo que não for 0-9 para vazio*/	
				placa = placa.replace(/[^0-9]+/g, "");
				/*Depois dos três primeiros caracteres adiciona a barra '-'*/
				if(placa.length > 3) {
					placa = placa.substring(0,3) + "-" + placa.substring(3);
				}
				if(placa.length > 5){
					placa = placa.substring(0,5) + placa.substring(5,8);
				}

				return placa;
			};

			element.bind("keyup", function(){
					ctrl.$setViewValue(_formatPlaca(ctrl.$viewValue));
					/*terceira operação da API de ngmodel que redenriza na tela*/
					ctrl.$render();
			});	

		}
	};

});