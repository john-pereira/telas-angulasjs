angular.module("controleVEF").directive("uiDate", function (){
	return{
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			/*função para formatar a data XX/XX/XXXX*/
			var _formatDate = function (date) {
				/*Limpa a data para um formato com apenas números, usando uma expressão regular e replace para substuir tudo que não for 0-9 para vazio*/	
				date = date.replace(/[^0-9]+/g, "");
				/*Depois dos dois primeiros caracteres adiciona a barra '/'*/
				if(date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				/*Mantem os cinco primeiros caracteres como está e depois adciona uma barra depois do quinto e impede qualquer digito depois do oitavo caracter '5-9'*/
				if(date.length > 5){
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};


			element.bind("keyup", function(){
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				/*terceira operação da API de ngmodel que redenriza na tela*/
				ctrl.$render();
			});
		}
	};
});