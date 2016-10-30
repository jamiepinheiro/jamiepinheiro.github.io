(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["UserService", 'ApiPath'];

function MyInfoController(UserService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  if($ctrl.user !== null){
  	$ctrl.user.fav.imgUrl = ApiPath + "/images/" + $ctrl.user.fav.short_name + ".jpg"
  }
}

})();
