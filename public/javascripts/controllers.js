'use strict';

(function($){
    var orderboxApp = angular.module('orderboxApp', []);
    var basket = [];
    var total = 0;

    orderboxApp.controller('OrderBoxCtrl', ['$scope', '$http', function($scope, $http){

            $http.get('foods/foods.json').success(function(data){
                console.log(data);
                $scope.foods = data;
            });

            $scope.orderProp = 'age';
            $scope.quantity = 1;
            $scope.basket = basket;
            $scope.total = total;

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
            // Calculate total price of basket
            $scope.calculate = function(){
                                $scope.total = 0;
                                $scope.basket.forEach(function(_item){
                                    $scope.total += _item.price * _item.count;
                                });
                            };
            // Remove the item in the basket
            $scope.remove = function(){
                                var item = this.goods;
                                item.count = 0;
                                $scope.basket = $.grep($scope.basket, function(_good){
                                    return _good !== item;
                                });
                            }
            
    }]); 


})(jQuery);
