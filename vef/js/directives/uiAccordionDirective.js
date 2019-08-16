angular.module("controleVEF").directive("uiAccordion", function (){
	return {
		templateUrl: "view/accordion.html",
		scope: {
			title: "@"
		}
	};
});