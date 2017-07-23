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
})
