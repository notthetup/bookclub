function doubleAll(numbers) {
  return numbers.map(function(element, index, array) {
  	return (element * 2);
  })
}

module.exports = doubleAll
