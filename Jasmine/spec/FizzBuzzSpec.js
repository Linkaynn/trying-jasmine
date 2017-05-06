describe("Decompose function", function () {
	it("has to return \"Fizz\" with 3 as parameter", function () {
		expect(translate(3)).toBe("Fizz");
	});
});


describe("Decompose function", function () {
	it("has to return \"Buzz\" with 5 as parameter", function () {
		expect(translate(5)).toBe("Buzz");
	});
});

describe("Decompose function", function () {
	it("has to return \"FizzBuzz\" with 15 as parameter", function () {
		expect(translate(15)).toBe("FizzBuzz");
	});
});

describe("Decompose function", function () {
	it("has to return \"1\" with 1 as parameter", function () {
		expect(translate(1)).toBe("1");
	});
});

describe("FizzBuzz function", function () {
	it("has to return \"12Fizz4Buzz\" with 5 as parameter", function () {
		expect(fizzBuzz(5)).toBe("12Fizz4Buzz");
	});
});

describe("FizzBuzz function", function () {
	it("has to return \"12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz\" with 15 as parameter", function () {
		expect(fizzBuzz(15)).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
	});
});
