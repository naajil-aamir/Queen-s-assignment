'use strict';

angular.module('myApp.view1', ['ngRoute','ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$window', function($scope,$http,$window) {
  $scope.tea = "hello";
  var requestCNN = {
    method: 'get',
    url: '../../CNNresult.json',
    dataType: 'json',
    contentType: "application/json"
  };
  var requestTwitter = {
    method: 'get',
    url: '../../twitterresult.json',
    dataType: 'json',
    contentType: "application/json"
  };
  
  
  
  $scope.getDataFromCNN = function(){
    $scope.tweets = new Array;
    $http(requestCNN)
      .success(function (jsonData) {
          for(var i = 0;i < 25 && i < jsonData.length; i++){
            $scope.CNN.push(jsonData[i]);
          }
      })
      .error(function () {
    });  
  }
  $scope.getDataFromTwitter = function(){
    $scope.CNN = new Array;
    $http(requestTwitter)
      .success(function (jsonData) {
        for(var i = 0;i < 25 && i < jsonData.length; i++){
          $scope.tweets.push(jsonData[i]);
        }
      })
      .error(function () {
    });  
  }
  $scope.getDataFromCNN();
  $scope.getDataFromTwitter();
  $scope.openLink = function(row){
    row.visited = true;
    $window.open(row.URL);
  }

}]);