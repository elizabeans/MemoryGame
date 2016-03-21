angular.module('themes')
	.factory('themeService', [
		'settings',
		'themeData',
		function(settings, themeData) {

			var themeService = {};

			themeService.getThemeData = function(theme, difficulty) {
				
				var filteredArr = [];

				switch(theme.name) {
					
					// case strings should match the options dropdown for 'Choose a Theme'
					case "Animals":
						filteredArr = themeData.animals;
						break;
					case "Food":
						filteredArr = themeData.food;
						break;
					default:
						break;
				}

				if(difficulty === "easy") {
					filteredArr = filteredArr.slice(0, settings.easyNumPics);
				} 

				if (difficulty === "medium") {
					filteredArr = filteredArr.slice(0, settings.mediumNumPics);
				}

				if (difficulty === "hard") {
					filteredArr = filteredArr.slice(0, settings.hardNumPics);
				} 

				return filteredArr;
			};

			return themeService;
		
	}]);