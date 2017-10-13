app.controller("LogoDesignCtrl", function($http, $scope) {

	$scope.logos = [];
	console.log($scope.logos);

	$http.get('/database/seed.json')
	   .then(function(results) {
	   		$scope.logos = results.data.logos;
	   		console.log($scope.logos);
	});

});