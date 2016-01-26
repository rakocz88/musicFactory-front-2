(function () {
    'use strict';

    angular
            .module('searchModule')
            .service('SearchService', controller);


    function controller($http) {
        return ({
            filter: filter
            
        });
            function filter(bandFilter){
                 return $http.get('http://localhost:9999/band/filter?name='+bandFilter.name+'&gengre='+bandFilter.gengre);
            }

    }
})();

