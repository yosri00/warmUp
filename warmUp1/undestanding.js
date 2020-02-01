// Modules



/*
var Student {
	firstName: "",
	lastName: "",
	age: 0,
	adv : 0,
	AvgScore : {
		math : 0,
		prog : 0,
		sport : 0
	}
};
*/

var class = [];

function createStudent(firstName, lastName, age, adv){
		return {
			firstName : firstName,
			lastName : lastName,
			age : age,
			adv
		};
}

class.push(createStudent("Mohamed", "Zemzemi", 26, 1));
