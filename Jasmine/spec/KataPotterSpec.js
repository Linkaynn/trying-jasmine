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
});
;