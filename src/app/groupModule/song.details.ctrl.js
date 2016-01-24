(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('SongDetailsController', MainController);


    function MainController(album, band, song) {
        var vm = this;
        vm.album = album.data;

        vm.band = band.data;
        vm.song = song.data;


        activate();

        function activate() {


        }




    }
})();
