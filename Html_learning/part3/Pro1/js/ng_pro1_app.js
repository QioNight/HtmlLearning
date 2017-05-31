angular.module('myTest', ['ngRoute', 'indexs', 'list'])
    .config(function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'tpls/index.html',
            controller: 'indexCtrl'
        }).when('/proList', {
            templateUrl: 'tpls/proList.html',
            controller: 'listCtrl'
        }).when('/userList', {
            templateUrl: 'tpls/userList.html',
            controller: 'listCtrl'
        }).otherwise({
            redirectTo: '/index'
        })
    });
