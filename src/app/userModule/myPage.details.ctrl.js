(function () {
    'use strict';

    angular
            .module('userModule')
            .controller('MyPageController', MainController);


    function MainController(user) {
        var vm = this;
        vm.user=user.data;
  
    }
})();
