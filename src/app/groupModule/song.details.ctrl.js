(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('SongDetailsController', MainController);


    function MainController(album, band, song, fileUploadService) {
        var vm = this;
        vm.album = album.data;

        vm.band = band.data;
        vm.song = song.data;
        vm.download = download;


        activate();

        function activate() {


        }
        
        function download(){
            var url =  "http://localhost:9999/file/download/"+vm.song.id;
            fileUploadService.downloadFile(url).then(function(sukcess){
                console.log("Sukces");
            }, function(error){
                console.log("error");
            });
           
        }




    }
})();
