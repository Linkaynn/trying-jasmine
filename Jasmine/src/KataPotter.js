function priceOf(arrayOfBooks) {
	if (arrayOfBooks.length == 0) {
		return 0;
	}

	let differentBooksCount = getDifferentBooksCount(arrayOfBooks);

	let discount = (differentBooksCount * 5) / 100;

	return ((arrayOfBooks - differentBooksCount) * 8) + (differentBooksCount * 8) * (1 - discount);
}

function getDifferentBooksCount(arrayOfBooks) {
	let differentBooksCount = 0;

	for (let indexOne = 0; indexOne < arrayOfBooks.length; indexOne++) {
		for (let indexTwo = indexOne + 1; indexTwo < arrayOfBooks.length; indexTwo++) {
			if (arrayOfBooks[indexTwo] != arrayOfBooks[indexOne]) {
				differentBooksCount++;
			}
		}
	}
	return differentBooksCount;
}
