/**
 * @author himani.bhardwaj
 */

angular.module("ToDoApp").controller("headerController", ["$scope","$location",
    function($scope,$location) {
        $scope.createNew = function(url) {
            $location.path( url );
        }
    }]);