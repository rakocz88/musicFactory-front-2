(function () {
    'use strict';

    angular
            .module('bandModule')
            .service('BandService', bandService);


    function bandService($http, $stateParams) {
        return ({
            registerBand: registerBand,
            byUser: byUser,
            getOne: getOne,
            getAlbumsForOne: getAlbumsForOne,
            createAlbum: createAlbum,
            getAlbum:getAlbum
        });

        function registerBand(band) {
            return $http.post('http://localhost:9999/band/create', band);
        }
        function byUser() {
            return $http.get('http://localhost:9999/band/byUser');
        }

        function getOne(groupId) {
            //TODO FIX PASS PARAM 
            return $http.get('http://localhost:9999/band/' + groupId);

        }

        function getAlbumsForOne(groupId) {
            //TODO FIX PASS PARAM 
            return $http.get('http://localhost:9999/band/' + groupId + '/albums');

        }

        function createAlbum(album) {
            //TODO FIX PASS PARAM 
            return $http.post('http://localhost:9999/album/create', album);

        }

        function getAlbum(albumId) {
            //TODO FIX PASS PARAM 
            console.log("ALBUM ID");
            console.log(albumId);
            return $http.get('http://localhost:9999/album/'+albumId);

        }



    }
})();
