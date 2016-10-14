(function(){
	"use strict";

	angular.module("MenuApp")
	.component("categories", {
		templateUrl: "components/categories.html",
		bindings: {
			categories: "<"
		}
	});
})();
