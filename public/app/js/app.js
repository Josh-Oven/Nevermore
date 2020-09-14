angular.module('nevermore', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: '../views/services.html'
    })

    .state('sitemap', {
      url: '/sitemap.xml',
      templateUrl: '../views/sitemap.xml'
    })

    $urlRouterProvider.otherwise('/home')

})
