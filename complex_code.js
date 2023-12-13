// Filename: complex_code.js
// Description: A sophisticated and elaborate code showcasing various JavaScript concepts and functionalities

// Global variables
const PI = Math.PI;
let radius = 5;

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  let area = PI * radius * radius;
  return area.toFixed(2);
}

// Function to calculate the circumference of a circle
function calculateCircleCircumference(radius) {
  let circumference = 2 * PI * radius;
  return circumference.toFixed(2);
}

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}

// Array containing multiple persons
let people = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 20)
];

// Loop through the array and introduce each person
for (let person of people) {
  person.introduce();
}

// Function to sort an array of numbers in ascending order
function sortNumbersAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Example usage of the sortNumbersAscending function
let unsortedNumbers = [9, 4, 8, 2, 1, 5];
let sortedNumbers = sortNumbersAscending(unsortedNumbers);
console.log(sortedNumbers);

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage of the isPrime function
let num = 17;
console.log(`${num} is ${isPrime(num) ? "prime" : "not prime"}.`);

// Event listener for button click event
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage of the fetchData function
fetchData("https://api.example.com/data");

// Complex code with additional functionalities and logic....

// ...

// ...

// ...

// End of complex_code.js