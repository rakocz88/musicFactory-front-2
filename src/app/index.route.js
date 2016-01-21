(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/loginModule/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('weapons',{
          url:'/weapons',
          templateUrl: 'app/weaponsModule/weapon-main.html',
          controller: 'WeaponsController',
          controllerAs: 'vm'
      })
      .state('register',{
          url:'/register',
          templateUrl: 'app/registerModule/register.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
      })
       .state('fileUpload',{
          url:'/fileUpload',
          templateUrl: 'app/fileUploadModule/file.html',
          controller: 'FileUploadController',
          controllerAs: 'vm'
      })
       .state('bands',{
          url:'/bands',
          templateUrl: 'app/groupModule/band.html',
          controller: 'BandController',
          controllerAs: 'vm',
          resolve : {
              bands : /* @ngInject */ function(BandService){
                  return BandService.byUser();
              }
          }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
