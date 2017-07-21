console.log("js sourced");
var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(function($routeProvider){

  //define out routes and point them at a controller
  $routeProvider
    .when('/rental', {
      controller: "RentalController",
      controllerAs: "rc",
      templateUrl: "/views/templates/rental.html"
    })
    .when('/contact', {
      controller: 'SaleController as sc',
      templateUrl: '/views/templates/sale.html'
    })
    .otherwise({
      redirectTo: "sale"
    });

});
