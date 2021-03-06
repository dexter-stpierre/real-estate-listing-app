console.log("js sourced");
var myApp = angular.module("myApp", ['ngRoute', 'xeditable']);

myApp.config(function($routeProvider){

  //define out routes and point them at a controller
  $routeProvider
    .when('/rental', {
      controller: "RentalController",
      controllerAs: "rc",
      templateUrl: "/views/templates/rental.html"
    })
    .when('/sale', {
      controller: 'SaleController as sc',
      templateUrl: '/views/templates/sale.html'
    })
    .when('/new', {
      controller: 'NewListingController as nlc',
      templateUrl: '/views/templates/new.html'
    })
    .otherwise({
      redirectTo: "sale"
    });

});
