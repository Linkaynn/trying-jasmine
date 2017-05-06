function fizzBuzz(string) {
	if (string % 3 == 0 && string % 5 == 0) {
		return "FizzBuzz";
	} else if (string % 3 == 0) {
		return "Fizz";
	} else if (string % 5 == 0) {
		return "Buzz";
	}
}