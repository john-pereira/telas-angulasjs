angular.module("controleVEF").filter("ellipsis", function () {
	return function (input, size) {

		if (input.length <= size) return input;
		var output = input.suvstring(0,(size || 2)) + "...";
		return output;
	};
}); 