
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
        StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
 
  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.about', {
    url: '/about',
    views: {
      'tab-dash': {
        templateUrl: 'templates/about.html'        
      }
    }
  })
  .state('tab.schedule', {
    url: '/schedule',
    views: {
      'tab-dash': {
        templateUrl: 'templates/schedule.html'        
      }
    }
  })
  .state('tab.activity', {
    url: '/activity',
    views: {
      'tab-dash': {
        templateUrl: 'templates/activity.html'        
      }
    }
  })
    .state('tab.1act_perot', {
    url: '/1act_perot',
    views: {
      'tab-dash': {
        templateUrl: 'templates/1act_perot.html'        
      }
    }
  })
    .state('tab.2act_park', {
    url: '/2act_park',
    views: {
      'tab-dash': {
        templateUrl: 'templates/2act_park.html'        
      }
    }
  })
    .state('tab.3act_group', {
    url: '/3act_group',
    views: {
      'tab-dash': {
        templateUrl: 'templates/3act_group.html'        
      }
    }
  })
    .state('tab.4act_seniour', {
    url: '/4act_seniour',
    views: {
      'tab-dash': {
        templateUrl: 'templates/4act_seniour.html'        
      }
    }
  })
   
   .state('tab.texas_spcs', {
    url: '/texas_spcs',
    views: {
      'tab-dash': {
        templateUrl: 'templates/texas_spcs.html'        
      }
    }
  })
   
   .state('tab.sponsor', {
    url: '/sponsor',
    views: {
      'tab-dash': {
        templateUrl: 'templates/sponsor.html'        
      }
    }
  })
   
    .state('tab.gallery', {
    url: '/gallery',
    views: {
      'tab-dash': {
        templateUrl: 'templates/gallery.html'        
      }
    }
  })
  
  .state('tab.news', {
    url: '/news',
    views: {
      'tab-dash': {
        templateUrl: 'templates/news.html'        
      }
    }
  })
  
    .state('tab.reach', {
    url: '/reach',
    views: {
      'tab-dash': {
        templateUrl: 'templates/reach.html'        
      }
    }
  })
   .state('tab.venue', {
    url: '/venue',
    views: {
      'tab-dash': {
        templateUrl: 'templates/venue.html'        
      }
    }
  })
  .state('tab.r_map', {
    url: '/r_map',
    views: {
      'tab-dash': {
        templateUrl: 'templates/r_map.html'        
      }
    }
  })
  
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    });
   
  $urlRouterProvider.otherwise('/tab/dash');

});
