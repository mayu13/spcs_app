
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
   
    .state('tab.gallery', {
    url: '/gallery',
    views: {
      'tab-dash': {
        templateUrl: 'templates/gallery.html'        
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
  
  .state('tab.account', {
    url: 'http://www.spcsusa.org/',
    views: {
      'tab-account': {
        Url: 'http://www.spcsusa.org/',
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
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/dash');

});
