var app         = angular.module("app", ["ui.router", "ngAnimate"]);

app.run(function($rootScope) {
  var elBody = document.getElementsByTagName('body')[0];
  var initBodyClasses = elBody.className;
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
      if (initBodyClasses == '') {
        elBody.className = toState.name;
      } else {
        elBody.className = toState.name + " " + initBodyClasses;
      }
  });
});

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
        .state('open-modal', { 
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
