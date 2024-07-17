// object
const person = {  name: "John Doe",  age: 30,  city: "New York",  isStudent: false,  grades: [90, 85, 95] };

// Convert JavaScript object to JSON string
const jsonString1 = JSON.stringify(person);
console.log("JSON:-1:",jsonString1);

// JSON string
const personNew = '{"name":"John Doe","age":30,"city":"New York","isStudent":false,"grades":[90,85,95]}';
// Convert JSON string to JavaScript object
const jsonObject = JSON.parse(personNew);
console.log("JSON:-2:",jsonObject);
