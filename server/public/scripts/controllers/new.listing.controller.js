myApp.controller('NewListingController', function($http){
  console.log('new listing controller loaded');

  var nlc = this;

  // defines new listing
  nlc.newListing = {
    type: 'rental',
  };

  console.log(nlc.newListing);

  nlc.message = "";

  //submits now listing
  nlc.submitNewListing = function(newListing){
    //sets the cost = rent so that I could have just 1 text field
    newListing.rent = newListing.cost;
    console.log(newListing);
    $http.post('/' + newListing.type, newListing).then(function(response){
      console.log('new listing posted');
      console.log(response);
      nlc.message = "New listing posted!";
    })
  }
})
