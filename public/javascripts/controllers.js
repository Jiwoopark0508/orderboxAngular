'use strict';
(function(){
    var orderboxApp = angular.module('orderboxApp', []);

    orderboxApp.controller('OrderBoxCtrl', ['$scope', '$http', function($scope, $http){
    
            $http.get('foods/foods.json').success(function(data){
                $scope.foods = data;
            });
            $scope.orderProp = 'age';
            $scope.func = function(){
                console.log("hi");
            }
            
        }]);    


})();
