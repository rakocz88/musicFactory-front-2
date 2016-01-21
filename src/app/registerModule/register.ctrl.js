


(function () {
    'use strict';

    angular
            .module('register')
            .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(UserDataService, $modal, $state) {

        var vm = this;
        vm.save = save;
        vm.openBandModal = openBandModal;
        vm.user = {};
        vm.user.bands = [];

        function save() {
            console.log(vm.user);
            UserDataService.save(vm.user);
             $state.go('login');
        }

        function openBandModal() {
            var modal = $modal.open({
                templateUrl: 'app/registerModule/bandModal.html',
                controller: 'BandRegisterModalController',
                controllerAs: 'vm',
                bindToController: true,
                resolve: {
                }
            });
            modal.result.then(function (data) {
                vm.user.bands.push(data);
            });
        }

    }
})();
