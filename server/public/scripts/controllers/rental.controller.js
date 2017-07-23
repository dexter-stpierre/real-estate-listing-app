myApp.controller("RentalController", function($http){
  console.log("Rental Controller loaded");
  var rc = this;
  rc.getRentals = function(){
    $http.get('/rental').then(function(response){
      console.log(response.data);
      rc.rentals = response.data;
    })
  }
  rc.getRentals();

  rc.updateRental = function(listing){
    console.log(listing);
    $http.put('/rental', listing).then(function(response){
      console.log(response);
      rc.getRentals();
    })
  }

  rc.deleteRental = function(id){
    console.log(id);
    $http.delete('/rental/' + id).then(function(){
      rc.getRentals();
    })
  }
})
