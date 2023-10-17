const people = [
  {
    firstName: "Jason",
    lastName: "He",
    favoriteColor: "green",
    student: true,
    graduated: true,
    favoriteNumbers: [1, 3, 4, 7, 10],
  },
  {
    firstName: "Evan",
    lastName: "Cow",
    favoriteColor: "yellow",
    student: true,
    graduated: true,
    favoriteNumbers: [2, 4, 6, 8, 10],
  },
  {
    firstName: "Evan",
    lastName: "How",
    favoriteColor: "blue",
    student: false,
    graduated: false,
    favoriteNumbers: [11, 12, 123, 432],
  },
  {
    firstName: "Evan",
    lastName: "Wow",
    favoriteColor: "black",
    student: true,
    graduated: false,
    favoriteNumbers: [10, 20, 30, 40, 50],
  },
];

people.forEach((person) => 
  console.log(person.firstName + " " + person.lastName)
);

people.forEach((person) => { 
  person.favoriteNumbers.forEach((number) => 
  console.log(number))
}); // if nested forEach, use {}

const students = people.filter((person) => person.student === true);
students.forEach((student) => 
  console.log(`Students: ${student.firstName} ${student.lastName}`) // template literals
  );