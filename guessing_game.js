
$(document).ready(function(){
	var game = {
		answer: Math.floor(Math.random()*100),
		guess: 0,

		//Arrays to keep track of player guesses
		tooLow: [0],
		tooHigh: [100],

		//Result of binary tree algorithm hint function contained within game.init
		hint: 50,

		//Game functionality
		init: function(){
			var hint = 50;
			$('#button').click(function(e) {
				e.preventDefault();
				$('#hint').html('Click here for a hint');
				game.guess = parseInt($('#game-input').val());
				var numGuesses = ((game.tooLow.length + game.tooHigh.length) - 1);
				if (game.guess == game.answer) {
					$('#container').html("<br><br><h2 class='header'>Congratulations! YOU WON in " + numGuesses + " guesses!!</h2> <br><br><a href='index.html'>Click here<a> to play again!");
					console.log("" + game.tooLow[0]);
				} else if (game.guess < game.answer){
					if ((game.answer - game.guess) < (game.answer - game.tooLow[0])){
						game.tooLow.unshift(game.guess);
					} else {
						game.tooLow.push(game.guess);
					}
					$('.text').html("That's too low. Try again!");
					game.hint = Math.floor((game.tooLow[0] + game.tooHigh[0]) / 2);
				} else {
					if ((game.guess - game.answer) < (game.tooHigh[0] - game.answer)) {
						game.tooHigh.unshift(game.guess);
					} else {
						game.tooHigh.push(game.guess);
					}
					$('.text').html("That's too high. Try again!");
					game.hint = Math.floor((game.tooLow[0] + game.tooHigh[0]) / 2);
				}
				return false;
			});
			$('#hint').click(function(){
				$(this).html('You should try ' + game.hint);
			});
		}
	};

game.init();
console.log("The secret number is " + game.answer);
});










