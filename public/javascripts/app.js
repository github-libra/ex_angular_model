angular
    .module('app', ['restangular'])
    .controller('AppCtrl', ['$scope', function($scope) {
        $scope.proposals = 1;
    }])
    .service('proposals', ['Restangular', function(Restangular) {

    }])