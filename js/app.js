
var app = angular.module('app', []);

// here we have a service that implement a few simple maths calculations
app.service('MathService', function () {
	this.add = function(a,b){
		return a + b;
	}

	this.substract = function(a,b){
		return a - b;
	}

	this.multiply = function(a,b){
		return a * b;
	}
});

/* version 1 */
app.controller('CalculatorController', function($scope, MathService){
	$scope.doSquare = function(){
		$scope.answer = MathService.multiply($scope.number, $scope.number);
	}

	$scope.doCube = function(){
		$scope.answer = MathService.multiply($scope.number, 
						MathService.multiply($scope.number, $scope.number));
	}
});

/*
varsion 2
// this service just use the 'MathService' to implement the 'square' and 'cube' calculations
app.service('CalculatorService', function(MathService){
	this.square = function(a){
		return MathService.multiply(a,a);
	};

	this.cube = function(a){
		return MathService.multiply(MathService.multiply(a, a), a);
	};
});

app.controller('CalculatorController', function($scope, CalculatorService){
	$scope.doSquare = function(){
		$scope.answer = CalculatorService.square($scope.number);
	}

	$scope.doCube = function(){
		$scope.answer = CalculatorService.cube($scope.number);
	}
});
*/
