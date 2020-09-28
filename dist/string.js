const sliceString = function(target, count){
	let rtnVal = [];
	let beforeCount = 0;
	let nextCount = count;
	if (count === 0) {
		rtnVal.push(target);
		return rtnVal;
	}
	for (var i = 0; i < target.length; i++) {
		if (nextCount >= target.length) {
			rtnVal.push(target.slice(beforeCount, target.length));
			break;
		}
		rtnVal.push(target.slice(beforeCount, nextCount));
		beforeCount = nextCount;
		nextCount = beforeCount + count;
	};
	return rtnVal;
};

const compressString = function(string, count){
	let cnt = 1;
	let fromIndex = 0;
	let toIndex = count;
	let rtnStringVal = "";

	for (var i = 0; i < string.length; i++) {
		let compareString_A = string.substring(fromIndex, toIndex);
		let compareString_B = string.substring(toIndex, toIndex + count);
		if (toIndex >= string.length) {
			ctn = 1;
			rtnStringVal = rtnStringVal + (cnt === 1 ? "" : cnt) + compareString_A;
			break;
		}
		fromIndex = toIndex;
		toIndex += count;
		if( compareString_A === compareString_B ){
			cnt += 1;
		}else{
			cnt = 1;
			rtnStringVal = rtnStringVal + (cnt === 1 ? "" : cnt) + compareString_A;
		}
	}
	return rtnStringVal;
};

export {sliceString, compressString}