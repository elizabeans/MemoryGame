angular.module('themes')
	.factory('animalsService', [
		'settings',
		'themeData',
		function(settings, themeData) {

			var animalsService = {};

			var animals = themeData.animals;

			animalsService.getAnimals = function(difficulty) {
				
				var filteredArr = animals;

				if(difficulty === "easy") {
					filteredArr = animals.slice(0, settings.easyNumPics);
				} 

				if (difficulty === "medium") {
					filteredArr = animals.slice(0, settings.mediumNumPics);
				}

				if (difficulty === "hard") {
					filteredArr = animals.slice(0, settings.hardNumPics);
				} 

				return filteredArr;
			};

			return animalsService;
		
	}]);