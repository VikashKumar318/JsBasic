//Objects in JavaScript Assignment 

//Section 1 – Working with Objects


// let user = {
//     name: "Vikash",
//     email: "Vikash@gmail.com",
//     role: "Developer"
// };
// console.log(user);


// const product = { 
// name: "Laptop", 
// price: 50000, 
// category: "Electronics" 
// }; 

// console.log(product.name);
// console.log(product.price);

// const user = { 
// name: "Vikash", 
// email: "vikash@example.com" 
// }; 
// console.log(user["email"]);


// const user = { 
// name: "Vikash", 
// email: "vikash@example.com" 
// }; 

// const key = "name"
// console.log(user["name"]);




// let user = { 
// name: "Vikash", 
// role: "student" 
// };
// user.role = "Developer"//Updated
// console.log(user);


// let user = { 
// name: "Vikash", 
// role: "student" 
// };
// user.isLoggedIn = "true"//Added
// console.log(user);



//Section 2 – Object Keys, Values and Entries 


// const user = { 
// name: "Vikash", 
// email: "vikash@example.com", 
// role: "developer" 
// }; 

// console.log(Object.keys(user));


// const product = { 
// name: "Laptop", 
// price: 50000, 
// category: "Electronics" 
// }; 
// console.log(Object.values(product));



// const settings = { 
// theme: "dark", 
// language: "English", 
// notifications: true 
// }; 

// console.log(Object.entries(settings));

// const user = {
//   name: "Vikash",
//   email: "vikash@example.com"
// };

// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });



//Section 3 – Destructuring and Shorthand Properties 


// const user = { 
// name: "Vikash", 
// email: "vikash@example.com", 
// role: "developer" 
// }; 

// const { name, email } = user;
// console.log(name);
// console.log(email);

// const product = { 
// name: "Laptop", 
// price: 50000 
// }; 

// const { name: productName} = product;
// console.log(productName);


// const name = "Vikash";
// const email = "vikash@example.com";
// const role = "developer";

// const user = {
//     name,
//     email, 
//     role
// };
// console.log(user);

// function displayUser({ name, email }) {
//   console.log(name);
//   console.log(email);
// }

// displayUser({
//     name: "Vikash",
//     email: "vikash@gmail.com"
// })


// Section 4 – Spread and Rest 


// const user = {
//   name: "Vikash",
//   role: "developer"
// };

// const newUser = {
//   ...user
// };

// console.log(newUser);


// const user = {
//   name: "Vikash",
//   role: "Student"
// };

// const newUser = {
//   ...user,

//   role: "Developer"

// };

// console.log(newUser);



// const frontend = ["HTML", "CSS", "JavaScript"]; 
// const backend = ["Node.js", "Express"];

// const combine = [...frontend, ...backend];
// console.log(combine);


