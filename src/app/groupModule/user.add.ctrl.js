(function () {
    'use strict';

    angular
            .module('bandModule')
            .controller('UserAddController', MainController);


    function MainController($modal, band, BandService) {
        var vm = this;
        vm.band=band.data;
        vm.search = search;
        vm.users= [];
        vm.filter={};
        vm.addToBand=addToBand;

        activate();
        
        function search(){  
           
            BandService.getFilteredUsers(vm.filter).then(function(items){
                vm.users=items.data;
            });
        }
        
        function addToBand(user){
            var userBand = {"userId": user.id, "groupId" : vm.band.id};
            console.log(userBand);
            BandService.addNewMember(userBand);
        }

        function activate() {
           
        }

//        function addSong() {
//
//            var modal = $modal.open({
//                templateUrl: 'app/groupModule/song.modal.html',
//                controller: 'AddSongModal',
//                controllerAs: 'vm',
//                bindToController: true,
//                resolve: {
//                    album: vm.album,
//                    band: vm.band
//                }
//
//            });
//            modal.result.then(function (item) {
//                console.log("Sukces");
//            });
//
//        }



    }
})();
