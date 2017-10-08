app.controller("TypographyCtrl", function($http, $scope) {

	$scope.typography = [];
	console.log($scope.typography);

	$http.get('/database/seed.json')
	   .then(function(results) {
	   		$scope.typography = results.data.typography;
	   		console.log($scope.typography);
	});

});