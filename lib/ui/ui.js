angular.module("ui", []);
angular.module("ui").run(function ($templateCache){
	$templateCache.put("view/accordion.html", '<div calss="ui-accordion-title" ng-click="open()">{{title}}</div><div calss="ui-accordion-content" ng-click="isOpened" ng-transclude></div>');
});
angular.module("ui").directive("uiAccordions", function (){
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function ( ) {
				accordions.forEach(function (accordion){
					accordion.isOpened = false;
				});
			}
		}
	};
});

angular.module("ui").directive("uiAccordion", function (){
	return{
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "uiAccordions",
		link: function ($scope, $element, $attrs, ctrl){
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened = true;
			};
		}
	};
});

/*<ui-accordions>
				
				<ui-accordion title="Accordion 1">
					Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
				</ui-accordion>
				<ui-accordion title="Accordion 2">
					Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
				</ui-accordion>
				<ui-accordion title="Accordion 3">
					Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
				</ui-accordion>
				<ui-accordion title="Accordion 4">
					Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
				</ui-accordion>
			</ui-accordions>*/