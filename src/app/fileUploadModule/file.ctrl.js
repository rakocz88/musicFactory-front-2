


(function () {
    'use strict';

    angular
            .module('fileUploadModule')
            .controller('FileUploadController', controller);

    function controller(fileUploadService, $state, $scope, $http) {

        var vm = this;
        vm.uploadFile = uploadFile;




        function uploadFile() {
            var file = $scope.myFile;
            var uploadUrl = 'http://localhost:9999/file/upload';
            fileUploadService.uploadFile(file, uploadUrl);
        }
        ;




    }
})();
