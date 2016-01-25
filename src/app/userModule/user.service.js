(function() {
  'use strict';

  angular
    .module('userModule')
    .service('UserDataService', userService);

  function userService($http) {
      return({
          registerUserService:registerUserService,
          getSessionUser : getSessionUser
      });
      
      function registerUserService(user){
          $http.post('http://localhost:9999/user/create', user);
      }
      
       function getSessionUser(){
          return $http.get('http://localhost:9999/user/details');
      }
  }
})();
