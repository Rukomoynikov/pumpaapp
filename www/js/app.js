// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(typeof analytics !== "undefined") {
      analytics.startTrackerWithId("UA-4217169-9");
    } else {
      console.log("Google Analytics Unavailable");
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-events.html',
          controller: 'EventsCtrl'
        }
      }
    })

    .state('tab.eventdetail', {
      url: '/events/:enventId',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-event-detail.html',
          controller: 'EventDetailCtrl'
        }
      }
    })

    .state('tab.sales', {
      url: '/sales',
      views: {
        'tab-sales': {
          templateUrl: 'templates/tab-sales.html',
          controller: 'SalesCtrl'
        }
      }
    })

    .state('tab.saledetail', {
      url: '/sales/:saleId',
      views: {
        'tab-sales': {
          templateUrl: 'templates/tab-sale-detail.html',
          controller: 'SaleDetailCtrl'
        }
      }
    })    

    .state('tab.collection', {
      url: '/collection',
      views: {
        'tab-collection': {
          templateUrl: 'templates/tab-collection.html',
          controller: 'CollectionCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

    .state('tab.operator', {
        url: '/operator',
        views: {
            'tab-operator': {
                templateUrl: 'templates/tab-operator.html'
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/events');

});


var showBlock = function(block){
  (document.getElementById(block).style.display == "none") ? document.getElementById(block).style.display = "block" : document.getElementById(block).style.display = "none";
}