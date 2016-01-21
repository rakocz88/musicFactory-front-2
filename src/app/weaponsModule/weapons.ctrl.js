


(function() {
  'use strict';

  angular
    .module('weapons')
    .controller('WeaponsController', MainController);

  /** @ngInject */
  function MainController() {
      
    var vm = this;
    vm.msg="hello";

  }
})();
