/**
 * @author himani.bhardwaj
 */

angular.module("ToDoApp").controller("createController", ["$scope", "$location", "todoAppService",
    function ($scope, $location, todoAppService) {
        $scope.formData = {};
        var textDate, valTime, todo;
        $(".datetime").ptTimeSelect({
            onFocusDisplay: true,
            zIndex: 10
        });
        $scope.conditionToDo = function (textdate) {
            var currentDate = new Date();
            var arrDate;
            if (textdate == "" || textdate == undefined)
                return;
            else {
                arrDate = textdate.split("-");
                if (currentDate.getFullYear() > parseInt(arrDate[0])) {
                    alert("You are selected backdated ToDo. We are unable to do that");
                    return false;
                } else if (currentDate.getFullYear() == parseInt(arrDate[0])) {
                    if (currentDate.getMonth() + 1 > parseInt(arrDate[1])) {
                        alert("You are selected backdated ToDo. We are unable to do that");
                        return false;
                    } else {
                        if (currentDate.getDate() > parseInt(arrDate[2])) {
                            alert("You are selected backdated ToDo. We are unable to do that")
                            return false;
                        } else {
                            return true;
                        }
                    }
                } else {
                    return true;
                }
            }
            return false;
        }
        $scope.saveToDo = function (url) {
            textDate = $("#datepicker").val();
            valTime = $(".datetime").val();
            todo = $("#todonotes").val();
            var selectedOpt = $scope.conditionToDo(textDate);
            $scope.formData = {
                "date": textDate,
                "time": valTime,
                "todos": todo
            }
            if (selectedOpt == true && valTime != undefined) {

                console.log(" Worked with objects")
                todoAppService.add($scope.formData);
                alert("Successfully Added.")
                /*$http.post('/API/todoApp', $scope.formData)
                 .complete(function(data) {

                 console.log(data);
                 // $location.path( url );
                 })*/
                $location.path(url);
            } else {
                alert("Please fill the Date and time field properly.");
            }

        }
        $scope.cancelToDo = function (url) {
            $location.path(url);
        }
    }]);
