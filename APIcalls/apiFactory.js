angular.module('tlgcApp').factory('apiFactory', function($http){

    var token;

   fetch('./apiConfig.json').then(function (results) {
       return results.json();
   }).then(function (data) {
       token = 'Bearer ' + data['token']; //Github token of the user , it helps in authentication.
   })

    var endpoint = 'https://api.github.com/repos/facebook/react/forks';    // Get users who forked the repo
        

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