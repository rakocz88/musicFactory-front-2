(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('AlbumDetailsController', MainController);


    function MainController(album) {
        var vm = this;
       vm.album= album.data;

        activate();

        function activate() {


        }


    }
})();
