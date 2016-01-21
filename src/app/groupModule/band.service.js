(function() {
  'use strict';

  angular
    .module('bandModule')
    .service('BandService', bandService);

  /** @ngInject */
  function bandService($resource, $http) {
     var registerBandService = $resource('http://localhost:9999/band/create',{},{
         create:{
             method : 'POST'
         }
     });
     var byUser = $http.get('http://localhost:9999/band/byUser',{},{}).$promise;
       
    var serv = angular.extend(byUser, registerBandService);
    return serv;
    

  }
})();
