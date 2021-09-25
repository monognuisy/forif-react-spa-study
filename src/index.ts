interface Person {
  name: string;
  age: number;
}

// eslint-disable-next-line arrow-body-style
const introducePerson = (person: Person): string => {
  return `Hello! My name is ${person.name} and I'm ${person.age} years old.`;
};

const Me: Person = { name: 'Sungmin Yoo', age: 20 };

console.log(introducePerson(Me));
