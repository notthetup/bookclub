module.exports = function getShortMessages(messages) {
 return messages.filter(function (value, index, array) {
  	return (value.message.length < 50)
  }).map(function (value, index, array) {
  	return value.message;
  })
}
