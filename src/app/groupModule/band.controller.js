(function() {
  'use strict';

  angular
    .module('bandModule')
    .controller('BandController', MainController);


  function MainController(bands, $state) {
    var vm = this;
    vm.bands = bands.data;
    vm.viewDetails= viewDetails;
  
    
    activate();
    
    function viewDetails(band){
        $state.go("band",{bandId: band.id});
    }
    
    function activate(){
        
 
    }
    


  }
})();
