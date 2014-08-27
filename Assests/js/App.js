/**
 * @author himani.bhardwaj
 */
var todoApp = angular.module("ToDoApp", ['ngRoute']);
var data;
todoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'js/template/allToDo.html',
                controller: 'startController'
            }).
            when('/createNew', {
                templateUrl: 'js/template/createnewToDo.html',
                controller: 'createController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

function dataService(param1,obj){
    this.data=param1;
    this.add=function(obj){

        var count=0;
        var property="todo";
        for(var i in this.data){
            count++;
        }
        property=property+count;
        this.data.property=obj;
    }
}

todoApp.factory('todoAppService', function() {
    data= {
        "todo0" : {
            "date" : "2014-08-21",
            "time" : "1:30 PM",
            "todos" : "Hello"
        },
        "todo1" : {
            "date" : "2014-08-22",
            "time" : "1:30 PM",
            "todos" : "Hi"
        },
        "todo2" : {
            "date" : "2014-08-26",
            "time" : "1:30 PM",
            "todos" : "Today"
        },
        "todo3" : {
            "date" : "2014-08-29",
            "time" : "1:30 PM",
            "todos" : "Bye"
        }
    }
    var object=function getData(obj){
        return obj;
    }
    //factory function body that constructs shinyNewServiceInstance
    return new dataService(data,object);
});

/*$(document).ready(function(){
 todoApp = angular.module("ToDoApp", []);
 });*/
