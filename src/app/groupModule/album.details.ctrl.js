(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('AlbumDetailsController', MainController);


    function MainController(album, band, $modal, songs, $state) {
        var vm = this;
        vm.album = album.data;
        vm.addSong = addSong;
        vm.band = band.data;
        vm.songs = songs.data;
        vm.showSong=showSong;

        activate();

        function activate() {


        }

        function addSong() {

            var modal = $modal.open({
                templateUrl: 'app/groupModule/song.modal.html',
                controller: 'AddSongModal',
                controllerAs: 'vm',
                bindToController: true,
                resolve: {
                    album: vm.album,
                    band: vm.band
                }

            });
            modal.result.then(function (item) {
                console.log("Sukces");
            });

        }

        function showSong(songId) {
            console.log(vm.band.id);
            $state.go("song", {bandId: vm.band.id, albumId: vm.album.id, songId: songId});
        }


    }
})();
