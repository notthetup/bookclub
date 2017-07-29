module.exports = function(User) {
	function BetterUser(name, age) {
		User.call(this, name, age);
	}

  	BetterUser.prototype = Object.create(User.prototype, {constructor: BetterUser});
  	BetterUser.prototype.toString = function() {return "[BetterUser: " + this.name + " (" + this.age + ")]"};

  	return BetterUser;
  }
