(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('BandControllerDetails', MainController);


    function MainController(band, albums, $modal, $state) {
        var vm = this;
        vm.band = band.data;
     
        vm.band.albums=albums.data;
        vm.addAlbum = addAlbum;
        vm.viewAlbum = viewAlbum;

        activate();


        function activate() {

        }
        
        function viewAlbum(album){
            console.log(album)
            $state.go("album",{albumId: album.id});
        }

        function addAlbum() {

            var modal = $modal.open({
                templateUrl: 'app/groupModule/albumModal.html',
                controller: 'AddAlbumModal',
                controllerAs: 'vm',
                bindToController: true

            });
            modal.result.then(function (item) {

                alert("Stworzono album");
            });

        }



    }
})();
