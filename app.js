'use strict';
var app = angular.module('demo-app',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'routes/home/home.html'
        })
        .state('checkout', {
            url: '/checkout',
            templateUrl: 'routes/checkout/checkout.html'
        })
}]);