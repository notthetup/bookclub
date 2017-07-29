module.exports = function checkUsersValid(goodUsers) {
	return function(usersBeingChecked){
		return usersBeingChecked.every(function (thisUserBeingChecked) {
			return goodUsers.some(function(thisGoodUser) {
				return thisGoodUser.id == thisUserBeingChecked.id;
			})
		})
	}
}

