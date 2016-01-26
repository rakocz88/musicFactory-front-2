


(function () {
    'use strict';

    angular
            .module('searchModule')
            .controller('SearchBandCtrl', MainController);


    function MainController(SearchService) {
        
        var vm = this;
        vm.search=search;
        vm.bands = [];
        vm.filter = {};
        vm.viewBand=viewBand;
        
        function search(){
            SearchService.filter(vm.filter).then(function(item){
           
                vm.bands=item.data;
            });
        }
        
        function viewBand(id){
            console.log(id);
        }


    }
})();
