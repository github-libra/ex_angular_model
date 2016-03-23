angular
    .module('app', ['restangular', 'models'])
    .controller('AppCtrl', function($scope, ProposalsSvc) {
        ProposalsSvc.getList().then(function(data) {
            $scope.proposals = data;
            $scope.profit = data[0].profit();
        })
    })
    .factory('ProposalsSvc', function(Restangular, Proposal) {
        Restangular.extendModel('proposals', function(obj) {
            return angular.extend(obj, Proposal);
        });
        return Restangular.all('proposals');
    })

/* models */
angular
    .module('models', [])
    .factory('Proposal', function() {
        return {
            profit: function() {
                return this.revenue() - this.cost();
            },
            revenue: function() {
                return this.price;
            },
            cost: function() {
                return this.costing;
            }
        }
    })