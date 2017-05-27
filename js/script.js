var app = angular.module('myApp', []);
app.controller('moviesCtrl', function($scope, $http) {

$scope.message = "";
//read	
  $http.get("https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json").then(function (response) {
      $scope.myData = response.data;
      
  });

//create
  $scope.newMovie = {};
      
    $scope.saveMovie = function(){
        $scope.myData.push($scope.newMovie);
        $scope.newMovie={};
        $scope.message = "New Movie has been added successfully!";
    };

//update 
  $scope.clickedMovie = {};
 	
 	$scope.selectMovie = function(x){
 		$scope.clickedMovie = x;
 	};
 	$scope.updateMovie = function(){
 		$scope.message = "The Movie has been updated successfully!";
 	};
//delete 
 	$scope.deleteMovie = function(){
 		$scope.myData.splice($scope.myData.indexOf($scope.clickedMovie),1);
 		$scope.message = "The Movie has been deleted!";
 	};
 
 	$scope.clearMessage = function(){
 		$scope.message = "";
 	};

});

