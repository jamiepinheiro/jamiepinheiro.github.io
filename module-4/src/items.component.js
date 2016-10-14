(function(){
	"use strict";

	angular.module("MenuApp")
	.component("items", {
		templateUrl: "components/items.html",
		bindings: {
			items: "<"
		}
	});

})();
