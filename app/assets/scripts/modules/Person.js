function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("I am " + this.name + ". My favorite color is " + this.favoriteColor);
	}
}

module.exports = Person;