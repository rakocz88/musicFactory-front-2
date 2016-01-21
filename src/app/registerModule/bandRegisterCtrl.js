


(function () {
    'use strict';

    angular
            .module('register')
            .controller('BandRegisterModalController', BandRegisterModalController);

    /** @ngInject */
    function BandRegisterModalController(BandService, $modalInstance) {

        var vm = this;
        vm.save = save;

        function save() {
            BandService.save(vm.band).$promise.then(function(data){
                $modalInstance.close(data);
            });
            
        }


    }
})();
