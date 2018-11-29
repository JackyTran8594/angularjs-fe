(function() {
    'use strict';

   var mainApp = angular.module('mainApp', [
    'ngResource', 'ui.bootstrap', 'ui.router', 'ngRoute',
    'ngDirectives', 'ngFilters', 'ngControllers', 'ngServices', 'ngHandlers', 'ngMaterial', 'ngTagsInput', 'ngAnimate',
    'ui.tree', 'angularTreeview', 'ngCookies', 'LocalStorageModule', 'ngFileUpload',
    ]);


    mainApp.config([
        '$windowProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
        function ($windowProvider, $stateProvider, $httpProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
            var window = $windowProvider.$get('$window');
    
            //$httpProvider.interceptors.push('dateInterceptor');
            $httpProvider.defaults.transformResponse.push(function (responseData) {
                convertDateStringsToDates(responseData);
                return responseData;
            });
            var hostname = window.location.hostname;
            var port = window.location.port;
            var rootUrl = 'http://' + hostname + ':' + port;
            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: rootUrl + '/_layouts/15/app/views/home.html',
                    controller: 'homeController'
                })
            $httpProvider.interceptors.push('httpInterceptor');
        }
    ])


    mainApp.run(function (editableOptions, $location) {
        editableOptions.theme = 'bs3'
    })
})();