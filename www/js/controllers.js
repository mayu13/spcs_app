angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/fetch.php")
   .success(function (response) {$scope.names = response.records;});
  
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
	
	
})
.controller('MyCtrl', function($scope) {
  $scope.title = 'Ionic';
})


.controller('SplashCtrl', function($scope, $cordovaSplashscreen) {
  $cordovaSplashscreen.show();
})

.controller('AccountCtrl', function($scope) {
})

.controller('ChatsCtrl', function($scope) {
  
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

.controller('SponsorCtrl', function($scope)
{
	$scope.images = [];
	$scope.loadImages = function() {
	
			$scope.images.push({ src: "img/logo1.png"});
			$scope.images.push({ src: "img/logo2.png"});
			$scope.images.push({ src: "img/logo3.jpg"});
			$scope.images.push({ src: "img/tech.png"});
		
	}
		
})

 
.controller('MapController', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(21.5200, -70.4700);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    }); 
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






