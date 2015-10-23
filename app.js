'use strict';

var app = angular.module('game',[]);

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.fish = -1;
	$scope.cards = -1;
	$scope.balls = -1;
	$scope.letters = -1;
	$scope.mice = -1;
	$scope.coins = -1;
	$scope.startOver = function(){
		$scope.fish=-1;
	};
	$scope.resetCard = function(){
		$scope.cards=-1;
	}
	$scope.resetBalls = function(){
		$scope.balls=-1;
	}
	$scope.resetLetters = function(){
		$scope.letters=-1;
	}
	$scope.resetMice = function(){
		$scope.mice=-1;
	}
	$scope.resetCoins = function(){
		$scope.coins=-1;
	}
	$scope.fishAnHour = function(){
		if($scope.fish > -1){
			return;
		}
		var temp = Math.random();
		if (temp> 1/Math.E){
			$scope.fish=0;
		}else{
			$scope.fish=1;
		}

	};

	$scope.tryCard = function(){
		if($scope.cards> -1){
			return;
		}
		$scope.cards=1;
	};

	$scope.tryBalls = function(){
		if($scope.balls> -1){
			return;
		}
		var temp = Math.random();
		if (temp> 1/2){
			$scope.balls=0;
		}else{
			$scope.balls=1;
		}
	};

	$scope.tryLetters = function(){
		if($scope.letters> -1){
			return;
		}
		var temp = Math.random();
		if (temp> 11/30){
			$scope.letters=0;
		}else{
			$scope.letters=1;
		}
	};

	$scope.tryMice = function(){
		if($scope.mice> -1){
			return;
		}
		var temp = Math.random();
		if (temp> 1/3){
			$scope.mice=0;
		}else{
			$scope.mice=1;
		}
	};

	$scope.tryCoins = function(){
		if($scope.coins> -1){
			return;
		}
		var temp = Math.random();
		if (temp> 1/(1+99/256)){
			$scope.coins=1;
		}else{
			$scope.coins=0;
		}
	}
}]);