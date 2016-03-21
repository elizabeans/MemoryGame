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
			controller: function($scope, $timeout) {

				var WAIT = false;
				var MAX_SCORE = $scope.gridWidth * $scope.gridHeight / 2;
				var score = 0;

				$scope.turns = 0;

				$scope.prevSelectedCard = null;

				// $scope.data contains animal array
				var gridMatrix = [];
				for(var i = 0; i < $scope.data.length; ++i) {
					
					// add an isFlipped property to entire animal object before inserting into matrix
					$scope.data[i].isFlipped = false;
					$scope.data[i].isMatched = false;

					if(i % $scope.gridWidth === 0) {
						gridMatrix.push([]);
					}

					gridMatrix[gridMatrix.length-1].push($scope.data[i]);
				}
				$scope.gridMatrix = gridMatrix;
				
				var flip = function(card, i, callback) {
					$timeout(function() {
						card.isFlipped = false;
						WAIT = false;
						if (callback) callback();
					}, i || 400);
				}

				var delaySelect = function(card) {
					if(card.isMatched || card === $scope.prevSelectedCard || WAIT) {
						return;
					}

					card.isFlipped = true;

					if($scope.prevSelectedCard) {
					 	if(card.id !== $scope.prevSelectedCard.id) {
					 		WAIT = true;
					 		flip(card);
					 		// $scope.prevSelectedCard.isFlipped = false;
					 		flip($scope.prevSelectedCard, 400, function() {
					 			$scope.prevSelectedCard = null;
					 		});

					 	} else {
					 		card.isFlipped = true;
					 		card.isMatched = true;
					 		$scope.prevSelectedCard.isMatched = true;
					 		$scope.prevSelectedCard = null;
					 		++score;
					 	}

					 	++$scope.turns;

					} else {
						$scope.prevSelectedCard = card;
					}
				};
				

				$scope.select = function(card) {
					$timeout(delaySelect(card), 400);		
				};
			}
		}
	});