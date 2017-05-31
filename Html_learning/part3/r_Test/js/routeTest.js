angular.module('myTest', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    '': { templateUrl: 'tpls/index.html' },
                    'module1@index': { templateUrl: 'tpls/module1.html' },
                    'module2@index': { templateUrl: 'tpls/module2.html' }
                }
            })
            .state('index.model1', {
                url: '/model1',
                views: {
                    'module2@index': { templateUrl: 'tpls/model1.html' }
                }
            })
            .state('index.model2', {
                url: '/model2',
                views: {
                    'module2@index': { templateUrl: 'tpls/model2.html' }
                }
            })
            
            .state('index.model1.test1', {
                url: '/test1',
                templateUrl: 'tpls/test1.html'
            })
            .state('index.model1.test2', {
                url: '/test2',
                templateUrl: 'tpls/test2.html'
            })
            .state('index.model1.test3', {
                url: '/test3',
                templateUrl: 'tpls/test3.html'
            })
            .state('index.model1.test4', {
                url: '/test4',
                templateUrl: 'tpls/test4.html'
            })

    });
