(function(){
	"use strict";

	angular.module("MenuApp")
	.controller("DataController", DataController);

	//DataController.$inject = ["MenuDataService"];
	//function DataController(MenuDataService){

	DataController.$inject = ["items"];
	function DataController(items){
		
		var data = this;

		// MenuDataService.getAllCategories().then(function (responce){
		// 	data.categories = responce;
		// });
		data.items = items;

		// data.getItems = function(shortName){
		// 	MenuDataService.getItemsForCategory(shortName).then(function (responce){
		// 		data.items = responce.menu_items;
		// 		console.log(data.items)
		// 	});
		// }
		// data.getItems("L");

	}

})();
