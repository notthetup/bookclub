function countWords(inputWords) {
	return inputWords.reduce(function (previousValue, currentValue, index, array) {
		if (! previousValue[currentValue]){
			previousValue[currentValue] = 1;
		}else{
			previousValue[currentValue] = previousValue[currentValue] + 1;
		}
		return previousValue;
	}, {})
}

module.exports = countWords
