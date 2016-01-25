(function () {
    'use strict';

    angular
            .module('fileUploadModule')
            .service('fileUploadService', fileUploadService);


    function fileUploadService($http, $q, $timeout, $window) {
        return ({
            uploadFile: upload,
            downloadFile: download
        });

        function upload(file, uploadUrl) {
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
        function download(downloadUrl) {
               var defer = $q.defer();

                    $timeout(function() {
                            $window.location = downloadUrl;
                        }, 1000)
                        .then(function() {
                            defer.resolve('success');
                        }, function() {
                            defer.reject('error');
                        });
                    return defer.promise;
        }

    }
})();

