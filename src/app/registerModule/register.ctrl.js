


(function () {
    'use strict';

    angular
            .module('register')
            .controller('RegisterController', RegisterController);


    function RegisterController(UserDataService, $modal, $state) {

        var vm = this;
        vm.save = save;
        vm.openBandModal = openBandModal;
        vm.user = {};
        vm.user.bands = [];

        function save() {
 
            UserDataService.save(vm.user);
             $state.go('login');
        }

        function openBandModal() {
            var modal = $modal.open({
                templateUrl: 'app/registerModule/bandModal.html',
                controller: 'BandRegisterModalController',
                controllerAs: 'vm',
                bindToController: true
                
            });
            modal.result.then(function (item) {
       
                vm.user.bands.push(item.data.id);
            });
        }

    }
})();
