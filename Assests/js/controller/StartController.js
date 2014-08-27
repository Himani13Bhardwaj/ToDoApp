/**
 * @author himani.bhardwaj
 */
angular.module("ToDoApp").controller("startController", ["$scope", "$http", "todoAppService",
    function ($scope, $http, todoAppService) {
        $scope.flagToggle = true;
        $scope.formData = {};
        $scope.currentTodos = [];
        $scope.expiredTodos = [];
        $scope.Collection = {
            "pending": [],
            "completed": []
        };
        /*if ($scope.flagToggle == true) {
         $scope.toDoItem();
         } else {
         $scope.finishItem();
         }*/
        $scope.init = function () {
            $scope.flagToggle = true;
            $scope.toDoItem();
            $scope.Collection = {
                pending: [],
                completed: []
            };
        }
        $scope.conditionToDo = function (textdate) {
            if (textdate == undefined) {
                return;
            }
            var currentDate = new Date();
            var arrDate = textdate.split("-");
            if (currentDate.getFullYear() > parseInt(arrDate[0])) {
                alert("You are selected backdated ToDo. We are unable to do that");
                return false;
            } else if (currentDate.getFullYear() == parseInt(arrDate[0])) {
                if (currentDate.getMonth() + 1 > parseInt(arrDate[1])) {
                    return false;
                } else {
                    if (currentDate.getDate() > parseInt(arrDate[2])) {
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                return true;
            }
            console.log("current Date" + currentDate.now());
            return false;
        }
        $scope.retriveTodos = function () {

            $scope.formData = todoAppService.data;

            for (var todo in $scope.formData) {
                if ($scope.conditionToDo($scope.formData[todo].date) == true) {
                    $scope.Collection['pending'][$scope.Collection['pending'].length] = $scope.formData[todo];

                    console.log($scope.currentTodos);
                } else {
                    $scope.Collection['completed'][$scope.Collection['completed'].length] = $scope.formData[todo];

                    console.log($scope.currentTodos);
                }
            }
            $http.get('../API/todoApp').complete(function (data) {
                console.log("data working");
            });
        }

        $scope.toDoItem = function () {
            $scope.flagToggle = true;
            $scope.Collection = {
                "pending": [],
                "completed": []
            };
            $scope.retriveTodos();
        }

        $scope.finishItem = function () {
            $scope.flagToggle = false;
            $scope.Collection = {
                "pending": [],
                "completed": []
            };
            $scope.retriveTodos();
        }

        $scope.deleteToDo = function () {
            alert("deleteToDo")
        }
    }]);