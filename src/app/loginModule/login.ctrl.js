


(function () {
    'use strict';

    angular
            .module('loginModule')
            .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(LoginService, $state) {
        
        var vm = this;
        vm.logIn=logIn;
        
        function logIn(){
            LoginService.save(vm.logUser).$promise.then(function(success){
                $state.go('fileUpload');
            }, function(error){
                alert("błąd w logowaniu");
            });
        }


    }
})();
