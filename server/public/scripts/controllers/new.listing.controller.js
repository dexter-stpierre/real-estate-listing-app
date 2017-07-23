myApp.controller('NewListingController', function($http){
  console.log('new listing controller loaded');
  var nlc = this;
  nlc.newListing = {
    type: 'rental',
  };
  console.log(nlc.newListing);
  nlc.submitNewListing = function(newListing){
    newListing.rent = newListing.cost;
    console.log(newListing);
    $http.post('/' + newListing.type, newListing).then(function(response){
      console.log('new listing posted');
      console.log(response);
    })
  }
})
