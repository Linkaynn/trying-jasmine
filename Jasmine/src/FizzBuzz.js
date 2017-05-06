function decompose(string) {
	if (string % 3 == 0 && string % 5 == 0) {
		return "FizzBuzz";
	} else if (string % 3 == 0) {
		return "Fizz";
	} else if (string % 5 == 0) {
		return "Buzz";
	} else {
		return String(string);
	}
}

function fizzBuzz(limit) {
	var fizzBuzzString = "";

	for (var value = 1; value <= limit; value++) {
		fizzBuzzString += decompose(value);
	}

	return fizzBuzzString;
}