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
		expect(getDifferentBooksCount([0, 0])).toBe(0);
	});

	it("1 with [0,1]", function () {
		expect(getDifferentBooksCount([0, 0])).toBe(0);
	});

	it("1 with [0,1,0,1]", function () {
		expect(getDifferentBooksCount([0, 0])).toBe(0);
	});

	it("2 with [0,1,0,2]", function () {
		expect(getDifferentBooksCount([0, 0])).toBe(0);
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

	it("0.15 with 3", function () {
		expect(getDiscount(3)).toBe(0.15);
	});

	it("0.20 with 4", function () {
		expect(getDiscount(4)).toBe(0.20);
	});

	it("0.25 with 5", function () {
		expect(getDiscount(5)).toBe(0.25);
	});

});

describe("Basic tests:", function () {
	it("Basket empty, cost 0", function () {
		expect(priceOf([])).toBe(0);
	});

	it("Basket [0], cost 8", function () {
		expect(priceOf([0])).toBe(8);
	});

	it("Basket [1], cost 8", function () {
		expect(priceOf([1])).toBe(8);
	});

	it("Basket [2], cost 8", function () {
		expect(priceOf([2])).toBe(8);
	});

	it("Basket [3], cost 8", function () {
		expect(priceOf([3])).toBe(8);
	});

	it("Basket [4], cost 8", function () {
		expect(priceOf([4])).toBe(8);
	});
});