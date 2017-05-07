//The numbers inside the array indicates which book is (0 is the first book, 1 the second one, etc..)

describe("Different books function must count", function () {
	it("0 with empty", function () {
		expect(getDifferentBooksCount([])).toBe(0);
	});

	it("0 with [0]", function () {
		expect(getDifferentBooksCount([0])).toBe(0);
	});

	it("0 with [0,0]", function () {
		expect(getDifferentBooksCount([0, 0])).toBe(0);
	});

	it("0 with [0,0,0,0,0]", function () {
		expect(getDifferentBooksCount([0, 0, 0, 0, 0])).toBe(0);
	});

	it("1 with [0,1]", function () {
		expect(getDifferentBooksCount([0, 1])).toBe(1);
	});

	it("1 with [0,1,0,1]", function () {
		expect(getDifferentBooksCount([0, 1, 0, 1])).toBe(1);
	});

	it("2 with [0,1,0,2]", function () {
		expect(getDifferentBooksCount([0, 1, 0, 2])).toBe(2);
	});

	it("3 with [0,1,2,4]", function () {
		expect(getDifferentBooksCount([0, 1, 2, 4])).toBe(3);
	});

	it("4 with [0,1,2,3,4]", function () {
		expect(getDifferentBooksCount([0, 1, 2, 3, 4])).toBe(4);
	});

	it("5 with [0,1,2,3,4,5]", function () {
		expect(getDifferentBooksCount([0, 1, 2, 3, 4, 5])).toBe(5);
	});
});

describe("Discount must be", function () {
	it("0 with 0", function () {
		expect(getDiscount(0)).toBe(0);
	});

	it("0.05 with 1", function () {
		expect(getDiscount(1)).toBe(0.05);
	});

	it("0.10 with 2", function () {
		expect(getDiscount(2)).toBe(0.10);
	});

	it("0.20 with 3", function () {
		expect(getDiscount(3)).toBe(0.20);
	});

	it("0.25 with 4", function () {
		expect(getDiscount(4)).toBe(0.25);
	});

	it("0 with 5", function () {
		expect(getDiscount(5)).toBe(0);
	});

});

describe("Basic tests:", function () {
	it("[], cost 0", function () {
		expect(priceOf([])).toBe(0);
	});

	it("[0], cost 8", function () {
		expect(priceOf([0])).toBe(8);
	});

	it("[1], cost 8", function () {
		expect(priceOf([1])).toBe(8);
	});

	it("[2], cost 8", function () {
		expect(priceOf([2])).toBe(8);
	});

	it("[3], cost 8", function () {
		expect(priceOf([3])).toBe(8);
	});

	it("[4], cost 8", function () {
		expect(priceOf([4])).toBe(8);
	});
});

describe("Discount tests:", function () {
	it("[0,1] costs 8 * 2 * 0.95", function () {
		expect(priceOf([0, 1])).toBe(8 * 2 * 0.95);
	});

	it("[0,2,4] costs 8 * 3 * 0.9", function () {
		expect(priceOf([0, 2, 4])).toBe(8 * 3 * 0.9);
	});

	it("[0,1,2,4] costs 8 * 4 * 0.8", function () {
		expect(priceOf([0, 1, 2, 4])).toBe(8 * 4 * 0.8);
	});

	it("[0,1,2,3,4] costs 8 * 5 * 0.75", function () {
		expect(priceOf([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75);
	});
});

describe("Several discount tests:", function () {
	it("[0,0,1] costs 8 + (8 * 2 * 0.95)", function () {
		expect(priceOf([0, 0, 1])).toBe(8 + (8 * 2 * 0.95));
	});

	it("[0,0,1,1] costs 2 * (8 * 2 * 0.95)", function () {
		expect(priceOf([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95));
	});

	it("[0,0,1,2,2,3] costs (8 * 4 * 0.8) + (8 * 2 * 0.95)", function () {
		expect(priceOf([0, 0, 1, 2, 2, 3])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
	});

	it("[0,0,1,1,2,2,3,4] costs 8 + (8 * 5 * 0.75)", function () {
		expect(priceOf([0, 0, 1, 1, 2, 2, 3, 4])).toBe(8 + (8 * 5 * 0.75));
	});
});

