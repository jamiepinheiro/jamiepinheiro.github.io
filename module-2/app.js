(function() {
	"use strict";
	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService){
		var list = this;
		list.toBuy = ShoppingListCheckOffService.getToBuy();

		list.buy = function(index){
			ShoppingListCheckOffService.buyItem(index);
		}
	}

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var list = this;
		list.bought = ShoppingListCheckOffService.getBought();
	}


	function ShoppingListCheckOffService(){
		var service = this;
		var toBuy = [{name: "Apples", quantity: 5}, {name: "Oranges", quantity: 7},
		{name: "Pears", quantity: 3}, {name: "Peaches", quantity: 4}, {name: "Mangos", quantity: 10}];
		var bought = [];

		service.getToBuy = function(){
			return toBuy;
		}

		service.getBought = function(){
			return bought;
		}

		service.buyItem = function(index){
			bought.push(toBuy[index]);
			toBuy.splice(index, 1);
		}
	}

})();
