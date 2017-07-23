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

  sc.updateListing = function(listing){
    console.log(listing);
    $http.put('/sale', listing)
      .then(function(response){
        sc.getListings();
    })
  }

  sc.deleteListing = function(id){
    console.log(id);
    $http.delete('/sale/' + id).then(function(response){
      console.log(response);
      sc.getListings();
    })
  }
})
