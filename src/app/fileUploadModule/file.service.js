(function () {
    'use strict';

    angular
            .module('fileUploadModule')
            .service('fileUploadService', fileUploadService);

    function fileUploadService($http) {
        var service = {
            uploadFile: function (file, uploadUrl) {
                var fd = new FormData();
                fd.append('file', file);
                $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                        .success(function () {
                            console.log("sukcess");
                        })
                        .error(function () {
                            console.log("error");
                        });
            }
        };
        return service;
    }
})();
