var app         = angular.module("app", ["ui.router", "ngAnimate"]);

app.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('top', { 
            abstract: true,
            views: {
                'default': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('main', { 
            parent: 'top',
            url: '/main',
            views: {
                'content': {
                    templateUrl: 'views/content.html',
                    controller: 'ContentCtrl'
                },
                'side': {
                    templateUrl: 'views/side.html',
                    controller: 'SideCtrl'
                }
            }
        })
        .state('openmodal', { 
            parent: 'main',
            views: {
                'modal@': {
                    templateUrl: 'views/modal.html',
                    controller: 'ModalCtrl'
                }
            }
        })
    $urlRouterProvider.otherwise('/main');
}]);
