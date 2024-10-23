//Object Constructor
let exampleObject = new Object();

//Object literal
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

//Forms to add property to one object
user["likes birds"] = true;
user.carrer = "Ingenieria de Sistemas";

//Delete propertys

delete user["likes birds"];
delete user.age;

console.log(user);

//Computed properties

const nameProperty = "semester";

let student = {
    //Take the value of variable for the key
    [nameProperty]: 5
};

console.log(student);

//Property value shorthand

//Large Form
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let userObject = makeUser("John", 30);
  user.name; // John

//Short Form
function makeUser2(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
}


//Property existence test, “in” operator

let animal = {
    specie: "Koala"
};

console.log( animal.type === undefined ); // true means "no such property"

const existProperty = "specie" in animal;
console.log(existProperty);

//Iterate Object

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  

  