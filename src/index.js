// eslint-disable-next-line arrow-body-style
var introducePerson = function (person) {
    return "Hello! My name is " + person.name + " and I'm " + person.age + " years old.";
};
var Me = { name: 'Sungmin Yoo', age: 20 };
console.log(introducePerson(Me));
