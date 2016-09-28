(function() {
	"use strict";

	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope){
		$scope.items = "";
		$scope.msg = "";
		$scope.color = "color: black"
		$scope.bordercolor = "border-color: grey"
		$scope.check = function(){
			if($scope.items.trim() == ""){
				$scope.msg = "Please enter data first";
				$scope.color = "color: red"
				$scope.bordercolor = "border-color: red"
			}else{
				$scope.color = "color: green"
				$scope.bordercolor = "border-color: green"
				var length = $scope.items.split(",").length;
				if(length > 3){
					$scope.msg = "Too much!";
				}else{
					$scope.msg = "Enjoy!";
				}
			}
		}
	}




})();
