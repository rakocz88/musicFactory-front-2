(function() {
  'use strict';

  angular
    .module('userModule')
    .service('UserDataService', userService);

  function userService($http) {
      return({
          registerUserService:registerUserService,
          getSessionUser : getSessionUser,
          getUserFilter:getUserFilter
      });
      
      function registerUserService(user){
          $http.post('http://localhost:9999/user/create', user);
      }
      
       function getSessionUser(){
          return $http.get('http://localhost:9999/user/details');
      }
      
       function getUserFilter(login, firstName, lastName){
          return $http.get('http://localhost:9999/user/filter?login='+login+'&firstName='+firstName+'&lastName='+lastName).$promise;
      }
  }
})();
