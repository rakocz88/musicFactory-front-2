(function () {
    'use strict';

    angular.module('components').
            directive("tnavbar", navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/components/tglNavbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
            console.log('hello');
            var vm = this;
            vm.msg = "hello";
        }
    }
})();