'use strict';
app.controller('homeCtrl', ['$scope', 'itemService', '$filter', 'commonService','$state', '$rootScope',
    function (scope, itemService, $filter, commonService, state, rootScope) {
        var selectedItem = [],
            isFound,
            cartCount;

        rootScope.cardItems = 0;
        rootScope.orderDetails = {address:'',orderDays:'1'};

        //get item
        itemService.getItems().then(function (res) {
            scope.itemData = res;
            scope.itemData.forEach(function (obj) {
                obj.quantity = 0;
            });
        }, function (err) {
            alert('we have some issues API end');
        });

        //on no.of Item decrease
        scope.onDecrease = function (index) {
            if (scope.itemData[index].quantity > 0) {
                scope.itemData[index].quantity--;
                isFound = $filter('filter')(selectedItem, {name: scope.itemData[index].name}, true)[0];
                selectedItem[selectedItem.indexOf(isFound)].quantity = scope.itemData[index].quantity;
                if (scope.itemData[index].quantity == 0) {
                    if (!!isFound) {
                        selectedItem.splice(selectedItem.indexOf(isFound), 1)
                    }
                }
                cardDisplay();
            }
        };

        //on no.of Item increase
        scope.onIncrease = function (index) {
            scope.itemData[index].quantity++;
            isFound = $filter('filter')(selectedItem, {name: scope.itemData[index].name}, true)[0];

            if (!!isFound) {
                selectedItem[selectedItem.indexOf(isFound)].quantity = scope.itemData[index].quantity;
            } else {
                selectedItem.push(scope.itemData[index]);
            }
            cardDisplay();
        };

        function cardDisplay() {
            cartCount = 0;
            selectedItem.forEach(function (obj) {
                cartCount += obj.quantity;
            });
            rootScope.cardItems = cartCount;
        }

        scope.onConfirmYourItems = function () {
            if(rootScope.cardItems != 0){
            commonService.setConfirmItems(selectedItem);
            state.go('checkout')
            }else{
                alert('Please select items');
            }
        }
    }]);