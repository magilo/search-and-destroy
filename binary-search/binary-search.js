'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1){
		return (array[0] === target);
	}
	let middleIdx = Math.ceil(array.length / 2);
	let middle = array[middleIdx];
	console.log('current middle: ', middle);

	if(target === middle){
		console.log("found target! ", middle);
		return true;
	}else if(target < middle){
		const left = array.slice(0, middleIdx);
		console.log("left array: ", left);
		return binarySearch(left, target);
	}else if(target > middle){
		 const right = array.slice(middleIdx);
		 console.log("right array: ", right);
		 return binarySearch(right, target);
	}else{
		return false;
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
