angular.module('tlgcApp').factory('apiFactory', function($http){

    const endpoint = 'https://api.github.com/repos/facebook/react/forks';    // Get users who forked the repo
    const token = 'Bearer 908914bc59c2f3002eb450d8619af89401b13fbd';   //Github token of the user , it helps in authentication.

    var apis = {};

    apis.getForkedUsers = function(reqData){
        return $http.get(endpoint,reqData);
    }

    apis.followUser = function(userName){
        var req = {
            method: 'PUT',
            url: 'https://api.github.com/user/following/'+userName,
            headers: {
               'Authorization': token
            },
        }
        $http(req)
        .then(function(resp){
            alert('Success: Following');
        },function(err){
            alert('Failed: Try again');
        });;         
    }       
    return apis;
})