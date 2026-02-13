/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((person) => {
    if (person.profession === "developer") {
      console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}, profession: ${person.profession}`);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}, profession: ${person.profession}`);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newPerson = { id: 4, name: "Adi", age: "20", profession: "intern" };
  arr.push(newPerson);
  arr.forEach((person) => {
    console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}, profession: ${person.profession}`);
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((person) => person.profession !== "admin");
  arr.forEach((person) => {
    console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}, profession: ${person.profession}`);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "Aditya", age: "22", profession: "designer" },
    { id: 6, name: "Aman", age: "21", profession: "manager" },
    { id: 7, name: "Rahul", age: "23", profession: "developer" },
  ];
  const concatenatedArr = arr.concat(newArr);
  concatenatedArr.forEach((person) => {
    console.log(`id: ${person.id}, name: ${person.name}, age: ${person.age}, profession: ${person.profession}`);
  });
}
