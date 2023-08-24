const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstLabel, firstArray] = data.lists[0];
const [secondLabel, secondArray] = data.lists[1];
const [thirdLabel, thirdArray] = data.lists[2];

const result = []

const extractBiggest = () => {
	const firstLastValue = firstArray[firstArray.length - 1] || -Infinity;
	const secondLastValue = secondArray[secondArray.length - 1] || -Infinity;
	const thirdLastValue = thirdArray[thirdArray.length - 1] || -Infinity;

	if (firstLastValue >= secondLastValue && firstLastValue >= thirdLastValue) {
		return firstArray.pop();
	} else if (secondLastValue >= thirdLastValue) {
		return secondArray.pop();
	} else {
		return thirdArray.pop();
	}
}

// Only edit above

// Add values to the result array
for (let i = 0; i < 15; i++) {
	result.push(extractBiggest());
}

console.log(result);
