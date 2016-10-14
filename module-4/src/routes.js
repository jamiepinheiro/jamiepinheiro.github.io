(function(){

	angular.module("MenuApp")
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "templates/home.html"
			})

			.state("categories", {
				url: "/categories",
				templateUrl: "templates/categories.html",
				controller: "DataController as data",
				resolve: {
					items: ["MenuDataService", function(MenuDataService){
						return MenuDataService.getAllCategories();
					}]
				}
			})

			.state("menu", {
				url: "/menu/{catId}",
				templateUrl: "templates/items.html",
				controller: "DataController as data",
				resolve: {
					items: ["$stateParams", "MenuDataService", function($stateParams, MenuDataService){
						return MenuDataService.getItemsForCategory($stateParams.catId);
					}]
				}
			});

		}

})();
