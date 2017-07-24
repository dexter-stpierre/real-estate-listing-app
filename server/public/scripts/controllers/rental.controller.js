myApp.controller("RentalController", function($http){
  console.log("Rental Controller loaded");
  var rc = this;

  //get list of rentals to display on the DOM
  rc.getRentals = function(){
    $http.get('/rental').then(function(response){
      console.log(response.data);
      rc.rentals = response.data;
    })
  }

  rc.getRentals();

  //updates selected rental
  rc.updateRental = function(listing){
    console.log(listing);
    $http.put('/rental', listing).then(function(response){
      console.log(response);
      rc.getRentals();
    })
  }

  //deletes selected rental
  rc.deleteRental = function(id){
    console.log(id);
    $http.delete('/rental/' + id).then(function(response){
      console.log(response);
      rc.getRentals();
    })
  }
})
