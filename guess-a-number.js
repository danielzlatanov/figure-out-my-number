function guessANumber() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let computerNumber = Math.floor(Math.random() * 100);
	let guess;

	let recursiveAsyncReadLine = function () {
		readline.question('Guess my number (0-100): ', number => {
			guess = Number(number);

	if(guess <= 100 && guess >= 0) {
		if (guess == computerNumber) {
			console.log('You have guessed it! Congrats.');
			return readline.close();
		} else if (guess > computerNumber) {
			console.log(`${guess} is too high!`);
			recursiveAsyncReadLine();
		} else if (guess < computerNumber) {
			console.log(`${guess} is too low!`);
			recursiveAsyncReadLine();
		} 
	}else {
			console.log(
				"You should enter a valid number that's in the range! Give it a shot."
			);
			recursiveAsyncReadLine();
		}
		});
	}
	recursiveAsyncReadLine();

}
guessANumber();
