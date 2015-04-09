angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/fetch.php")
   .success(function (response) {$scope.names = response.records;});
   
})
.controller('AccountCtrl', function($scope, $http) {
   $http.get("http://www.techroversolutions.com/Ionic_Mayu/fetch_member.php")
   .success(function (response) {$scope.names = response.records;});
})

.controller('DetailCtrl', function($scope, $ionicSlideBoxDelegate) {
   $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
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






