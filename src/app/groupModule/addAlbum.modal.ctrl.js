(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('AddAlbumModal', MainController);


    function MainController(BandService, $modalInstance, $stateParams) {
        var vm = this;
        vm.save = save;

        activate();

        function activate() {


        }

        function save() {
            vm.album.band = $stateParams.bandId;
            console.log(vm.album);
            BandService.createAlbum(vm.album).then(function (data) {
                $modalInstance.close(data);
            });

        }


    }
})();
