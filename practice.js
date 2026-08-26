// let num1 = 8;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);



// let num = 5;
// num += 4;
// console.log(num);
// num -= 4;
// console.log(num);
// num *= 4;
// console.log(num);
// num /= 4;
// console.log(num);
// num %= 4;
// console.log(num);
// num **= 4;
// console.log(num);
// num -= 4;
// num++;
// console.log(++num);
// console.log(num++);
// console.log(num--);
// console.log(--num);



// a = "hii"
// console.log(a);

// let age = 18;
// if (age >= 18) {
//  console.log("Aligible for vate");
// }
// else {
//     console.log("not Aligible for vate");
// }

// let x = "10";

// if (x === 10) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal");
// }


// let marks = 75;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }

// let number = 7;

// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid credentials");
// }


// let num1 = 12;
// let num2 = 10;

// console.log(num1 + num2, num1 - num2, num1 / num2, num1 * num2, num1 ** num2, num1 % num2);

// let a = 10;

//  a += 10;
//  a -= 10;
//  a /= 10;
//  a *= 10;
//  a = 10;
//  console.log(a);


// ++num;
// num++;
// console.log(num--);

// console.log("4" === 4);

// let age = 18;

// if (age >= 18) {
//     console.log("You are Adult");
// }else {
//     console.log("You are Not Adult");

// }

// let marks = 50;


// if (marks >= 90) {
//     console.log("G-A");
// } else if (marks >= 70) {
//     console.log("G-B");

// }else if (marks >= 60) {
//     console.log("G-C");


// }else if (marks >= 50) {
//     console.log("G-D");

// }else {
//     console.log("Fail");

// }


// let arr = ["Vikash", 54, 5449, "a", "m"];





// console.log(arr);


// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr[5]);

// let fruits = ["Apple", "Mango", "kela", "Orange"];

// console.log(fruits.includes("Apple"));
// console.log(fruits.indexOf("Orange"));

// console.log(fruits.length);
// console.log(fruits.length - 1);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits);





//Object in js

// const person = {

// name : "Vikash",
// age : 20,
// student : true
// };
// console.log(person);

// const product = {
//     price : 546,
//     avgRating : 4.1,
//     discount : 20
// }

// console.log(product.price);
// console.log(product.avgRating);
// console.log(product["avgRating"]);

// console.log(product);
// console.log(Object.keys (product));
// console.log(Object.values (product));


// const person = {
//     name : "Vikash",
//     age : 20,
//     student : true,
//     rollNo : 22

// };

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(person.name);
// console.log(person.age);
// console.log(person.student);
// console.log(person.rollNo);

// console.log(person["name"]);
// console.log(person["age"]);

// let student = {
//     name: "Vikash",
//     age: 20,
//     course: "js",

//     arr: ["vk", 20, 52, "uk"],

//     obj: {
//         ciyy: "Patna",
//         home: "Manjhar"


//     }
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.name);
// console.log(student.age);


// console.log(student["name"]);

// student.name = "Kajal"
// student.age = 23
// student.city = "sherghati"
// student.home = "Manjhar"

// delete student.city;
// delete student.home;

// console.log(student);


// const student = {
//     name : "vikash",
//     age : 20,

//     marks : {
     
//         html : 50,
//         css : 80,
//        js : 40,
    

//     }
// };

// console.log(student);
// console.log(student.marks["css"]);
// console.log(student.marks["js"]);


// const student = {
//     name : "vikash",
//     age : 20,

//     skills : ["HTML", "CSS", "JS"]
       
// };
// console.log(student);
// console.log(student.skills[0]);
// console.log(student.skills[2]);
// console.log(student.skills[1]);
// console.log(student.skills.length);



// const student = {
//     name : "vikash",
//     age : 20,

// greet : function () {
//     console.log("my name is ," + this.name);
//     console.log("my age is", + this.age);
// }
       
// };

// student.greet();
// console.log(student);

// let student =  {
//     name : "Vikash",
//     age : 20,
//     city : "Patna"

// };

// console.log(Object.entries(student));


// let arr = [20, 10 , 50, 30, 60];

// for (let a of arr) {
//     console.log(a);
// }

// console.log(arr);


// let fruits = ["Apple", "Mango", "Orange", "Banana"];

// for (let b of fruits) {
//     console.log(b);
// };

// console.log(fruits);


// let name = "Vikash";
// for (let a of  name) {
//     console.log(a);
// }

// let number = [1, 5, 8, 5, 6, 8, 4];

// for (let n of number) {
//     console.log(n);
// }
// console.log(number);

// let students = [

// {name : "Vikash", age : 20},
// {name : "Upash", age : 24},
// {name : "Sunil", age : 30}



// ];

// for (let stu of students) {
    // console.log(stu);
    // console.log(stu.name);
    // console.log(stu["age"]);
// }

// console.log(students);


// let student = {
//     name : "Vikash",
//     age : 20,
//     city : "patna"
// };

// for (let key in student) {
   
// //    console.log(key);
//    console.log(key, student[key]);
    
    
// }

// let arr = [20, 50, 60, 40];

// arr.forEach(num => console.log(num));
    


// let arr = ["Vikash", 20, 80, 50];
// // arr.forEach(a => console.log(a));
// arr.forEach((a) => {
//     console.log(a);
// });

// let arr = ["Vikash", 20, 80, 50];

// arr.forEach((a, index, arr) => {
//     // console.log(a, index);
//     console.log(index);
//     console.log(a);
//     console.log(arr);
// });
    


//  const [a , b, c , d] = [20, 50, 60, 90];

// console.log(a);


//  let arr = [20, 50, 60, 90];

//  let [a , b , c] = arr;
// //  console.log(a , b, c);
//  console.log(a);
//  console.log(b);


// let numbers = [20, 30, 50, 30];

// let [a, c] = numbers;

// console.log(a);
// console.log(c);
// console.log(b);

// let a = [1, 2];
// let b = [3, 4];


// let c = [...a, ...b];
// console.log(c);
// console.log(...a, ...b);

// let arr1 = [10, 20, 30];
// let arr2 =  [10, 20, 30]

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let boys = ["Vikash", "Upash", "Niwash"];
// let girls = ["Kajal", "Runa", "Rupa"];

// let combine = [...boys, ...girls];
// console.log(combine);

// let arr2 = [...arr1]
// console.log(arr2);

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// let arr1 = [10, 20, 30];
// let arr2 = [10, 20, 30];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// let arr = [10, 20, 30, 40, 50, 60, 70];

// // let [a, b, c, ...rest] = arr;
// let [a, b, c, ...rest] = arr;
// console.log(a, b,c);
// console.log(rest);

// for (const element of object) {
    
// }

// array.forEach(element => {
    
// });