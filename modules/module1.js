

var module1 = angular.module('module1', [
    'ui.bootstrap', 'ngFilters', 'ngServices', 'ngResource',
]);


module1.config([
    '$windowProvider', '$stateProvider', '$httpProvider', '$urlRouterProvider', '$routeProvider', '$locationProvider',
    function ($windowProvider, $stateProvider, $httpProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
        var window = $windowProvider.$get('$window');
        var hostname = window.location.hostname;
        var port = window.location.port;
        var rootUrl = 'http://' + hostname + ':' + port;

        // config router
        $stateProvider
        .state('generalJournal', {
            url: '/ac/generalJournal',
            templateUrl: rootUrl + '/_layouts/15/BTS.SP.ERP/AC/GeneralJournal/index.html',
            controller: 'generalJournalController'
        })
        .state('subsidiaryLedger', {
            url: '/ac/subsidiaryLedger',
            templateUrl: rootUrl + '/_layouts/15/BTS.SP.ERP/AC/SubsidiaryLedger/index.html',
            controller: 'subsidiaryLedgerController'
        })
    }
])
