angular.module('themes', ['config'])        
	.constant('themeOptions', {
		types: [
			{
				name: "Animals"
			},
			{
				name: "Food"
			},
			{
				name: "Sports"
			}
		]})
	.constant('themeData', {
		animals: [
			{
				id: 1,
				name: "cheetah",
				src: "../images/animals/cheetah.png"	
			},
			{
				id: 2,
				name: "elephant",
				src: "../images/animals/elephant.png"
			},
			{
				id: 3,
				name: "giraffe",
				src: "../images/animals/giraffe.png"
			},
			{
				id: 4,
				name: "hippo",
				src: "../images/animals/hippo.png"
			},
			{
				id: 5,
				name: "horse",
				src: "../images/animals/horse.png"
			},
			{
				id: 6,
				name: "lion",
				src: "../images/animals/lion.png"
			},
			{
				id: 7,
				name: "monkey",
				src: "../images/animals/monkey.png"
			},
			{
				id: 8,
				name: "panda",
				src: "../images/animals/panda.png"
			},
			{
				id: 9,
				name: "rhino",
				src: "../images/animals/rhino.png"
			},
			{
				id: 10,
				name: "snake",
				src: "../images/animals/snake.png"
			},
			{
				id: 11,
				name: "tiger",
				src: "../images/animals/tiger.png"
			},
			{
				id: 12,
				name: "zebra",
				src: "../images/animals/zebra.png"
			},
			{
				id: 13,
				name: "aardvark",
				src: "../images/animals/aardvark.png"
			},
			{
				id: 14,
				name: "bird",
				src: "../images/animals/bird.png"
			},
			{
				id: 15,
				name: "cat",
				src: "../images/animals/cat.png"
			},
			{
				id: 16,
				name: "chicken",
				src: "../images/animals/chicken.png"
			},
			{
				id: 17,
				name: "dog",
				src: "../images/animals/dog.png"
			},
			{
				id: 18,
				name: "fish",
				src: "../images/animals/fish.png"
			},
			{
				id: 19,
				name: "pig",
				src: "../images/animals/pig.png"
			},
			{
				id: 20,
				name: "rabbit",
				src: "../images/animals/rabbit.png"
			},
			{
				id: 21,
				name: "raccoon",
				src: "../images/animals/raccoon.png"
			},
			{
				id: 22,
				name: "sloth",
				src: "../images/animals/sloth.png"
			},
			{
				id: 23,
				name: "squirrel",
				src: "../images/animals/squirrel.png"
			},
			{
				id: 24,
				name: "turtle",
				src: "../images/animals/turtle.png"
			}
		],
		
		food: [
			{
				id: 1,
				name: "apple",
				src: "../images/food/apple.png"
			},
			{
				id: 2,
				name: "banana",
				src: "../images/food/banana.png"
			},
			{
				id: 3,
				name: "broccoli",
				src: "../images/food/broccoli.png"
			},
			{
				id: 4,
				name: "candy",
				src: "../images/food/candy.png"
			},
			{
				id: 5,
				name: "carrot",
				src: "../images/food/carrot.png"
			},
			{
				id: 6,
				name: "cheese",
				src: "../images/food/cheese.png"
			},
			{
				id: 7,
				name: "cherry",
				src: "../images/food/cherry.png"
			},
			{
				id: 8,
				name: "chicken",
				src: "../images/food/chicken.png"
			},
			{
				id: 9,
				name: "chocolate",
				src: "../images/food/chocolate.png"
			},
			{
				id: 10,
				name: "croissant",
				src: "../images/food/croissant.png"
			},
			{
				id: 11,
				name: "donut",
				src: "../images/food/donut.png"
			},
			{
				id: 12,
				name: "fish",
				src: "../images/food/fish.png"
			},
			{
				id: 13,
				name: "gingerbread",
				src: "../images/food/gingerbread.png"
			},
			{
				id: 14,
				name: "hamburger",
				src: "../images/food/hamburger.png"
			},
			{
				id: 15,
				name: "hotdog",
				src: "../images/food/hotdog.png"
			},
			{
				id: 16,
				name: "icecream",
				src: "../images/food/icecream.png"
			},
			{
				id: 17,
				name: "lollipop",
				src: "../images/food/lollipop.png"
			},
			{
				id: 18,
				name: "noodles",
				src: "../images/food/noodles.png"
			},
			{
				id: 19,
				name: "pepper",
				src: "../images/food/pepper.png"
			},
			{
				id: 20,
				name: "pie",
				src: "../images/food/pie.png"
			},
			{
				id: 21,
				name: "pizza",
				src: "../images/food/pizza.png"
			},
			{
				id: 22,
				name: "strawberry",
				src: "../images/food/strawberry.png"
			}, 
			{
				id: 23,
				name: "sundae",
				src: "../images/food/sundae.png"
			},
			{
				id: 24,
				name: "watermelon",
				src: "../images/food/watermelon.png"
			}
		],

		sports: [
			{
				id: 1,
				name: "archery",
				src: "../images/sports/archery.png"
			},
			{
				id: 2,
				name: "baseball",
				src: "../images/sports/baseball.png"
			},
			{
				id: 3,
				name: "basketball",
				src: "../images/sports/basketball.png"
			},
			{
				id: 4,
				name: "boxing",
				src: "../images/sports/boxing.png"
			}, 
			{
				id: 5,
				name: "canoe",
				src: "../images/sports/canoe.png"
			}, 
			{
				id: 6,
				name: "cycle",
				src: "../images/sports/cycle.png"
			},
			{
				id: 7,
				name: "dive",
				src: "../images/sports/dive.png"
			},
			{
				id: 8,
				name: "fence",
				src: "../images/sports/fence.png"
			},
			{
				id: 9,
				name: "football",
				src: "../images/sports/football.png"
			},
			{
				id: 10,
				name: "golf",
				src: "../images/sports/golf.png"
			},
			{
				id: 11,
				name: "gymnastics",
				src: "../images/sports/gymnastics.png"
			},
			{
				id: 12,
				name: "hockey",
				src: "../images/sports/hockey.png"
			},
			{
				id: 13,
				name: "hurdle",
				src: "../images/sports/hurdle.png"
			},
			{
				id: 14,
				name: "karate",
				src: "../images/sports/karate.png"
			},
			{
				id: 15,
				name: "pingpong",
				src: "../images/sports/pingpong.png"
			},
			{
				id: 16,
				name: "ski",
				src: "../images/sports/ski.png"
			}, 
			{
				id: 17,
				name: "sky",
				src: "../images/sports/sky.png"
			},
			{
				id: 18,
				name: "soccer",
				src: "../images/sports/soccer.png"
			},
			{
				id: 19,
				name: "strength",
				src: "../images/sports/strength.png"
			},
			{
				id: 20,
				name: "surfing",
				src: "../images/sports/surfing.png"
			},
			{
				id: 21,
				name: "swim",
				src: "../images/sports/swim.png"
			},
			{
				id: 22,
				name: "tennis",
				src: "../images/sports/tennis.png"
			},
			{ 
				id: 23,
				name: "volleyball",
				src: "../images/sports/volleyball.png"
			},
			{
				id: 24,
				name: "yoga",
				src: "../images/sports/yoga.png"
			}
		]
	});