myApp.controller("SaleController", function($http){
  console.log("Sale Controller loaded");

  var sc = this;

  // returns all listings to display on DOM
  sc.getListings = function() {
      $http.get('/sale').then(function(response) {
        console.log(response.data);
        sc.listings = response.data;
      });
    }

  sc.getListings();

  // updates listing
  sc.updateListing = function(listing){
    console.log(listing);
    $http.put('/sale', listing)
      .then(function(response){
        sc.getListings();
    })
  }

  // deletes listing
  sc.deleteListing = function(id){
    console.log(id);
    $http.delete('/sale/' + id).then(function(response){
      console.log(response);
      sc.getListings();
    })
  }
})
