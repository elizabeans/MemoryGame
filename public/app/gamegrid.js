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

					// as long as the above does not apply, we flip the card and show pic
					card.isFlipped = true;

					// logic for when one card has already been flipped and we are flipping a second card
					if($scope.prevSelectedCard) {
					 	if(card.id !== $scope.prevSelectedCard.id) {
					 		// when both cards did not match
					 		WAIT = true;
					 		flip(card);
					 		flip($scope.prevSelectedCard, 400, function() {
					 			$scope.prevSelectedCard = null;
					 		});

					 	} else {
					 		// when both cards selected matched
					 		card.isFlipped = true;
					 		card.isMatched = true;
					 		$scope.prevSelectedCard.isMatched = true;
					 		$scope.prevSelectedCard = null;
					 		++score;

					 		// when all cards are matched, show an alert with a delay so the card flips before showing it
					 		if(score === MAX_SCORE) {
					 			$timeout(function() { alert("You win!") }, 300);
					 		}
					 	}

					 	++$scope.turns;

					} else {
						// set a previous selected card so the next time we flip, we have something to compare
						$scope.prevSelectedCard = card;
					}
				};
				

				$scope.select = function(card) {
					$timeout(delaySelect(card), 400);		
				};
			}
		}
	});