function priceOf(arrayOfBooks) {
	if (arrayOfBooks.length == 0) {
		return 0;
	}

	let differentBooksCount = getDifferentBooksCount(arrayOfBooks);

	let discount = getDiscount(differentBooksCount);

	return ((arrayOfBooks.length - (differentBooksCount + 1)) * 8) + ((differentBooksCount + 1) * 8) * (1 - discount);
}

function getDiscount(differentBooksCount) {
	switch (differentBooksCount) {
		case 1:
			return 0.05;
		case 2:
			return 0.10;
		case 3:
			return 0.20;
		case 4:
			return 0.25;
		default:
			return 0;
	}
}

function getDifferentBooksCount(arrayOfBooks) {
	let differentBooksCount = 0;

	arrayOfBooks.sort();

	for (let indexOne = 0; indexOne < arrayOfBooks.length; indexOne++) {
		for (let indexTwo = indexOne + 1; indexTwo < arrayOfBooks.length; indexTwo++) {
			if (arrayOfBooks[indexTwo] != arrayOfBooks[indexOne]) {
				differentBooksCount++;
				indexOne = indexTwo - 1;
				break;
			}
		}
	}
	return differentBooksCount;
}
