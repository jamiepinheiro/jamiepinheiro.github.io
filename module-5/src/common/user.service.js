(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.user = null;

  service.getFavItem = function (favItem) {
	return $http({
		method: "GET",
		url: ApiPath + '/menu_items/' + favItem + '.json',
	})
  };

  service.saveUser = function (user) {
	  service.user = user;
  }

  service.getUser = function(){
	  return service.user;
  }

 }

})();
