(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('AddSongModal', MainController);


    function MainController(band, album, $modalInstance, $stateParams, $scope, fileUploadService) {
        var vm = this;
        vm.save = save;

        activate();

        function activate() {


        }

        function save() {
            var file = $scope.myFile;
            var uploadUrl = 'http://localhost:9999/file/' + band.id + '/upload/' + album.id + '/' + vm.song.name + '/' + vm.song.description;
            fileUploadService.uploadFile(file, uploadUrl);
                $modalInstance.close();
        }

    }
})();
