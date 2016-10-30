(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ["UserService"];

function SignupController(UserService) {
  var $ctrl = this;
  $ctrl.user = null;
  $ctrl.success = false;
  $ctrl.failure = false;

  $ctrl.submit = function(){

	  	if($ctrl.user.favItem === undefined){
			$ctrl.user.favItem = "";
		}

		UserService.getFavItem($ctrl.user.favItem).then(function successCallback(response){
			$ctrl.success = true;
			$ctrl.failure = false;
			$ctrl.user.fav = response.data;
			UserService.saveUser($ctrl.user);
		}, function errorCallback(response){
			$ctrl.success = false;
			$ctrl.failure = true;
		});
	}
}

})();
