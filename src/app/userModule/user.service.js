(function() {
  'use strict';

  angular
    .module('userModule')
    .service('UserDataService', userService);

  /** @ngInject */
  function userService($resource) {
     var registerUserService = $resource('http://localhost:9999/user/create',{},{
         create : {
             method: 'POST'
         }
     });
    return registerUserService;
  }
})();
