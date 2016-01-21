(function () {
    'use strict';

    angular
            .module('loginModule')
            .service('LoginService', LoginService);

    /** @ngInject */
    function LoginService($resource) {
        var LoginService = $resource('http://localhost:9999/login', {}, {
        });
        return LoginService;


    }
})();
