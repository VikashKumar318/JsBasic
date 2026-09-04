// scope-Matlab variable ko kahan use kar sakte ho aur kahan nahi.



//Global scope-Jo variable function/block ke bahar banaya gaya ho, wo generally poore code me accessible hota hai.

// let name = "Vikash"
// function hello() {
//     console.log(name);
// }
// hello();
// console.log(name);


// const colleageName = "Impact"
// function hello() {
//     console.log(colleageName);
// }
// hello();
// console.log(colleageName);


//Function Scope-Jo variable function ke andar banaya gaya hai, wo sirf us function ke andar use ho sakta hai.

// function greet() {
//     let age = 20;
//     console.log(age);
// }
// greet()
// // console.log(age);//error

// function test() {
//     const age = 25;
//     console.log(age);
// }
// test()
// console.log(age);//error

// function test() {
//     var age = 20;
//     console.log(age);
// }
// test()
// console.log(age);


//Block Skope-let aur const block scoped hote hain.

// {
//     // var a = 5;//var not scope variable
//     let name = 20;
//     const age = "Vikash";
//     console.log(age);
//     console.log(name);
// }
// console.log(a);
// console.log(age);//error
// console.log(name);//error




// function counter() {
//     let count = 0;
// count = count + 1
// console.log(count);
// }
// counter()
// counter()


//Hoisting in js-JavaScript code execute karne se pehle declarations ko memory me register kar leta hai. Isi behavior ko commonly hoisting bolte hain.

// console.log(age);

// var age = 20;
// var age;

// var a;
// console.log(a);
// a = 5;


// console.log(a);
// let a = 2;




