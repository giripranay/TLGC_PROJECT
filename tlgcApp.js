var app = angular.module('tlgcApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/',{
            controller:'apiController',
            templateUrl:'HTML/forkedUsers.html'
        })
        .otherwise({redirectTo:'/'});
});

app.controller('apiController', ['$scope', 'apiFactory', function ($scope, apiFactory) {
    
    $scope.forkedUsers = [];
    $scope.page = 1;

    const perPage = 10;

    var parameters = {'params':{
        'page':$scope.page,
        'per_page':perPage
    }}

    function init() {
        apiFactory.getForkedUsers(parameters).then(
            function (users) {
                $scope.forkedUsers = users.data;
            },
            function (err) {
                console.log(err);
            })
    }
    init();

    $scope.followUser = function(userName){
        apiFactory.followUser(userName);
    }

    $scope.getNext = function(){
        $scope.page = $scope.page + 1;
        parameters['params']['page'] = $scope.page;
        apiFactory.getForkedUsers(parameters).then(
            function (users) {
                $scope.forkedUsers = users.data;
            },
            function (err) {
                console.log(err);
            })
    }

    $scope.getPrev = function(){
        if($scope.page > 1){
            $scope.page = $scope.page - 1;
            parameters['params']['page'] = $scope.page;
            apiFactory.getForkedUsers(parameters).then(
                function (users) {
                    $scope.forkedUsers = users.data;
                },
                function (err) {
                    console.log(err);
                })
        }
    }
}]);