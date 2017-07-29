function duckCount() {
	return  Array.prototype.slice.call(arguments).reduce(function (previousValue, currentValue, index, array) {
		if (Object.prototype.hasOwnProperty.call(currentValue, 'quack'))
		{
			previousValue++;
		}
		return previousValue;
	},0)


}

module.exports = duckCount
