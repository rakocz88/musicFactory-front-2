


(function () {
    'use strict';

    angular
            .module('register')
            .controller('BandRegisterModalController', BandRegisterModalController);

  
    function BandRegisterModalController(BandService, $modalInstance) {

        var vm = this;
        vm.save = save;

        function save() {
    
            BandService.registerBand(vm.band).then(function(data){
                $modalInstance.close(data);
            });
            
        }


    }
})();
