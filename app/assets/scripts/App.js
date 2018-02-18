var Person = require('./modules/Person');

alert('test 123');

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane", "green");
jane.greet();