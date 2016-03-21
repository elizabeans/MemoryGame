/*
 * gameGrid Directive under Memory App module that will create and control the game grid
 */
angular.module('MemoryApp')
	.directive('gameGrid', function() {

		return {
			restrict: 'AE',
			scope: {
				data: '=',
				gridWidth: '=',
				gridHeight: '='
			},
			templateUrl: '../gamegrid.html',
			controller: function($scope) {

				// $scope.data contains animal array
				var gridMatrix = [];
				for(var i = 0; i < $scope.data.length; ++i) {
					if(i % $scope.gridWidth == 0) {
						gridMatrix.push([]);
					}

					gridMatrix[gridMatrix.length-1].push($scope.data[i]);
				}
				$scope.gridMatrix = gridMatrix;

				$scope.select = function(card) {

				};

			}
		}
	});