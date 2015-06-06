angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/fetch.php")
   .success(function (response) {$scope.names = response.records;});
  
})

  .controller('MapCtrl', function($scope, $ionicLoading, $compile)
  {
      function initialize()
	  {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
       
		
        var mapOptions = 
		{
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() 
	  {
        if(!$scope.map)
		{
          return;
        }

        $scope.loading = $ionicLoading.show
		({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) 
		{
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error)
		{
          alert('Unable to get location: ' + error.message);
        });
		
      };
	  
      
      $scope.clickTest = function()
	  {
        alert('Example of infowindow with ng-click')
      };
      
    })



.controller('MailCtrl', function($scope, $cordovaSocialSharing){

	$scope.shareAnywhere = function()
	{
	 $cordovaSocialSharing.share("Click Here To Download SPCSUSA App...", "For SPCSUSA App..", null, "https://play.google.com/store/apps/details?id=com.ionicframework.spcsmayu334368");
	// $cordovaSocialSharing.share("This is a message to share...hellooo", "subject.........", "null...attchement", "http://blog.nraboy.com");
	}
	
  $scope.shareViaWhatsApp = function(message, image, link) {
     $cordovaSocialSharing
       .shareViaWhatsApp(message, image, link)
       .then(function(result) {
       
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
          alert("Cannot share on WhatsApp");
       });
   }
   
    $scope.shareViaTwitter = function(message, image, link) {
     $cordovaSocialSharing
       .shareViaTwitter(message, image, link)
       .then(function(result) {
         // Success!
         alert("success : "+result);
       }, function(err) {
         // An error occurred. Show a message to the user
         alert("Cannot share on Twitter");
       });
   }
   $scope.shareViaFacebook = function(message, image, link) {
     $cordovaSocialSharing
       .shareViaFacebook(message, image, link)
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
         alert("Cannot share on Facebook");
       });
   }
  // access multiple numbers in a string like: '0612345678,0687654321'
   $scope.shareViaSMS = function(message, number) {
     $cordovaSocialSharing
       .shareViaSMS(message, number)
       .then(function(result) {
        alert(result);
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
       });
   }
  // TO, CC, BCC must be an array, Files can be either null, string or array
   $scope.shareViaFacebook = function(message, subject, toArr, bccArr, file) {
     $cordovaSocialSharing
       .shareViaEmail(message, subject, toArr, bccArr, file)
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
       });
   }
   $scope.shareViaFacebook = function(socialType, message, image, link) {
    $cordovaSocialSharing
      .canShareVia(socialType, message, image, link)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });
    }

	
	
})



.controller('SplashCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
})

.controller('AccountCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope) {
  
})

.controller('MemberCtrl', function($scope) {
  
})


.controller('DetailCtrl', function($scope, $ionicSlideBoxDelegate) {
   $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }
})

.controller('CommitteCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/fetch_member.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('AdvisoryCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/advisory_team.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('ChaptersCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/chapter_team.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('SchCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/sch.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('SchhCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/sch_two.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('SchhhCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/sch_thre.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('SchlastCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/sch_last.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('NewsCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/news.php")
   .success(function (response) {$scope.names = response.records;});
})




.controller('SponsorCtrl', function($scope)
{
	$scope.images = [];
	$scope.loadImages = function() {
	
			$scope.images.push({ src: "img/logo1.png"});
		
			$scope.images.push({ src: "img/logo2.png"});
			$scope.images.push({ src: "img/sec.jpg"});
			$scope.images.push({ src: "img/logo3.jpg"});
			
			$scope.images.push({ src: "img/tech.png"});
			$scope.images.push({ src: "img/bank.png"});
			
		
	}
		
})

.controller('MediaCtrl', function($scope){
	$scope.images = [];
	$scope.loadImages = function() {
		
			$scope.images.push({ src: "img/about_1.jpg"});
			$scope.images.push({ src: "img/about_2.jpg"});
			$scope.images.push({ src: "img/about_3.jpg"});
			$scope.images.push({ src: "img/act_6.jpg"});			
			$scope.images.push({ src: "img/hotel_7.png"});
			$scope.images.push({ src: "img/act_1.jpg"});
			$scope.images.push({ src: "img/act_2.jpg"});
			$scope.images.push({ src: "img/act_3.png"});
			$scope.images.push({ src: "img/act_5.jpg"});			
			$scope.images.push({ src: "img/c7.jpg"});
			$scope.images.push({ src: "img/act_11.jpg"});
			$scope.images.push({ src: "img/act_13.jpg"});
			$scope.images.push({ src: "img/hotel_5.jpg"});
			$scope.images.push({ src: "img/p_sch_1.jpg"});
			$scope.images.push({ src: "img/p_sch_3.jpg"});
			$scope.images.push({ src: "img/p_sch_2.png"});			
			$scope.images.push({ src: "img/hotel_8.png"});
			$scope.images.push({ src: "img/hotel_4.png"});
			$scope.images.push({ src: "img/act_10.jpg"});
			$scope.images.push({ src: "img/hotel_6.png"});
			$scope.images.push({ src: "img/c8.jpg"});
			$scope.images.push({ src: "img/c13.jpg"});
			$scope.images.push({ src: "img/car1.jpg"});
			$scope.images.push({ src: "img/c14.jpg"});			
		
	}
});






