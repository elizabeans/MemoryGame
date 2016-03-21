(function (angular) {
    "use strict";

    // main module that injects three other modules
    // modules are containers that hold other things like factories, controllers, constants, services, etc.
	angular.module('MemoryApp', [
		'config',
		'utils',		/* injecting module dependencies */
		'themes'
	])
	.controller('MemoryAppController', [
		'$scope',
		'settings',        /* declaring dependencies */
		'arrayUtils',
		'themeOptions',
		'themeService',
		function($scope, settings, arrayUtils, themeOptions, themeService){
			// don't forget to add your dependencies in the function! ^^
			$scope.gameGrid = [];

			$scope.themes = themeOptions.types;

			$scope.difficulty = settings.difficulty;
			$scope.selectedDifficulty = {
				val: "easy",
			};

			$scope.currentState = {
				gameStarted: false
			};

			$scope.startGame = function(difficulty, theme) {

				if(difficulty === "easy") {
					$scope.gridWidth = settings.easyWidth;
					$scope.gridHeight = settings.easyHeight;
				} 

				if (difficulty === "medium") {
					$scope.gridWidth = settings.mediumWidth;
					$scope.gridHeight = settings.mediumHeight;
				}

				if (difficulty === "hard") {
					$scope.gridWidth = settings.hardWidth;
					$scope.gridHeight = settings.hardHeight;
				} 

				themeService.getThemeData(theme, difficulty).forEach(function(element) {
					// create a copy object of element and push into array so we have 2 of each
					var copyElement = jQuery.extend(true, {}, element);

					$scope.gameGrid.push(element);
					$scope.gameGrid.push(copyElement);
				});
				arrayUtils.shuffleArray($scope.gameGrid);

				$scope.currentState.gameStarted = true;
			};

			$scope.newGame = function() {
				alert("Not implemented yet");
			};

			$scope.showAnswers = function() {
				alert("Not implemented yet");
			};

			$scope.goToMainMenu = function() {

				$scope.currentState.gameStarted = false;
				$scope.gameGrid = [];
			};
		}
	]);
}(angular));