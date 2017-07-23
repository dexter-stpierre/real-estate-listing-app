myApp.controller("SaleController", function($http){
  console.log("Sale Controller loaded");
  var sc = this;
  sc.getListings = function() {
      $http.get('/sale').then(function(response) {
        console.log(response.data);
        sc.listings = response.data;
      });
    }
  sc.getListings();
})
