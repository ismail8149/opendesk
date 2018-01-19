'use strict';
app.controller('checkoutCtrl',['$scope', 'commonService', '$state', function (scope, commonService, state) {
    scope.selectedData = commonService.getConfirmItems();

    scope.onCheckoutItems = function () {
        state.go('home');
    }
}]);