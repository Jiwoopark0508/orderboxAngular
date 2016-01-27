'use strict';
(function($){
    var orderboxApp = angular.module('orderboxApp', []);
    var basket = [];
    var total = 0;
    orderboxApp.controller('OrderBoxCtrl', ['$scope', '$http', function($scope, $http){

            $http.get('foods/foods.json').success(function(data){
                $scope.foods = data;
            });


            $scope.quantity = 1;
            $scope.basket = basket;
            $scope.total = total;
            $scope.orderProp = 'age';

            $scope.addBasket = function(_quantity){
                        var index = $.inArray(this.food, $scope.basket);
                        // food is in the basket
                        if( index !== -1){
                            $scope.basket[index].count += _quantity;
                        }
                        // food is not in the basket
                        else{
                            this.food.count = _quantity;
                            $scope.basket.push(this.food);   
                        }
                            };
            $scope.calculate = function(){
                            $scope.total = 0;
                            $scope.basket.forEach(function(item){
                                $scope.total += item.price * item.count;
                            })
                        };

            

            
    }]); 


})(jQuery);
