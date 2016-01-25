(function () {
    'use strict';
    angular
            .module('frontend')
            .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/loginModule/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .state('weapons', {
                    url: '/weapons',
                    templateUrl: 'app/weaponsModule/weapon-main.html',
                    controller: 'WeaponsController',
                    controllerAs: 'vm'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/registerModule/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                })
                .state('fileUpload', {
                    url: '/fileUpload',
                    templateUrl: 'app/fileUploadModule/file.html',
                    controller: 'FileUploadController',
                    controllerAs: 'vm'
                })
                .state('bands', {
                    url: '/bands',
                    templateUrl: 'app/groupModule/band.html',
                    controller: 'BandController',
                    controllerAs: 'vm',
                    resolve: {
                        bands: function (BandService) {
                            return BandService.byUser();
                        }
                    }
                })
                .state('band', {
                    url: '/band/{bandId}',
                    templateUrl: 'app/groupModule/band.details.html',
                    controller: 'BandControllerDetails',
                    controllerAs: 'vm',
                    resolve: {
                        band: function (BandService, $stateParams) {
                            return BandService.getOne($stateParams.bandId);
                        },
                        albums: function (BandService, $stateParams) {
                            return BandService.getAlbumsForOne($stateParams.bandId);
                        }
                    }
                })
                .state('album', {
                    url: '/band/{bandId}/album/{albumId}',
                    templateUrl: 'app/groupModule/album.details.html',
                    controller: 'AlbumDetailsController',
                    controllerAs: 'vm',
                    resolve: {
                        band: function (BandService, $stateParams) {
                            return BandService.getOne($stateParams.bandId);
                        },
                        album: function (BandService, $stateParams) {
                            return BandService.getAlbum($stateParams.albumId);
                        },
                        songs: function (BandService, $stateParams) {
                            return BandService.getAlbumSongs($stateParams.albumId);
                        }
                    }
                })

                .state('song', {
                    url: '/band/{bandId}/album/{albumId}/song/{songId}',
                    templateUrl: 'app/groupModule/song.details.html',
                    controller: 'SongDetailsController',
                    controllerAs: 'vm',
                    resolve: {
                        album: function (BandService, $stateParams) {
                            return BandService.getAlbum($stateParams.albumId);
                        },
                        band: function (BandService, $stateParams) {
               
                            return BandService.getOne($stateParams.bandId);
                        },
                        song: function (BandService, $stateParams) {
                            return BandService.getSong($stateParams.songId);
                        }
                    }
                })
                .state('myPage', {
                    url: '/myPage',
                    templateUrl: 'app/userModule/myPage.html',
                    controller: 'MyPageController',
                    controllerAs: 'vm',
                    resolve: {
                          user: function (UserDataService) {
                              console.log(UserDataService.getSessionUser());
                            return UserDataService.getSessionUser();
                        }

                     
                    }
                });
        $urlRouterProvider.otherwise('/login');
    }

})();
