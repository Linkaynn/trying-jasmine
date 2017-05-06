function fizzBuzz(limit) {
	var fizzBuzzString = "";

	for (var value = 1; value <= limit; value++) {
		fizzBuzzString += translate(value);
	}

	return fizzBuzzString;
}

function translate(string) {
	if (string % 3 == 0 && string % 5 == 0) {
		return "FizzBuzz";
	}

	if (string % 3 == 0) {
		return "Fizz";
	}

	if (string % 5 == 0) {
		return "Buzz";
	}

	return String(string);
}
