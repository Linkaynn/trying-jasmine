describe("Decompose function", function () {

	it("Has to return \"Fizz\" with 3 as parameter", function () {
		expect(translate(3)).toBe("Fizz");
	});

	it("Has to return \"Buzz\" with 5 as parameter", function () {
		expect(translate(5)).toBe("Buzz");
	});

	it("Has to return \"FizzBuzz\" with 15 as parameter", function () {
		expect(translate(15)).toBe("FizzBuzz");
	});

	it("Has to return \"1\" with 1 as parameter", function () {
		expect(translate(1)).toBe("1");
	});

});

describe("FizzBuzz function", function () {
	it("Has to return \"12Fizz4Buzz\" with 5 as parameter", function () {
		expect(fizzBuzz(5)).toBe("12Fizz4Buzz");
	});

	it("Has to return \"12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz\" with 15 as parameter", function () {
		expect(fizzBuzz(15)).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
	});
});
