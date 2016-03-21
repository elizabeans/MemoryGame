angular.module('config', [])        
	.constant('settings', {
		easyNumPics: 12, // 4 * 6
		easyWidth: 6, 
		easyHeight: 4,
		
		mediumNumPics: 18, // 6 * 6
		mediumWidth: 6, 
		mediumHeight: 6,

		hardNumPics: 24, // 8 * 6
		hardWidth: 8, 
		hardHeight: 6,
		
		difficulty: {
			easy: {
				val: "easy"
			},

			medium: {
				val: "medium"
			},

			hard: {
				val: "hard"
			}
		}
	});

// constant is an object that has constant properties