//Slice Method

// let arr = [10, 20, 30, 40];

// let arr1 = arr.slice(1, 3);
// let arr1 = arr.slice(0, 1);
// console.log(arr1);
// console.log(arr);


// let arr = [10, 20, 30, 40];

// let arr1 = arr.slice(2, 3);
// console.log(arr1);


// let arr = [10, 20, 30, 40];

// let arr1 = arr.slice(1, 3);
// console.log(arr1);

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let res = fruits.slice(1, 4);
// console.log(res);

// console.log(fruits);


// let num = [10, 20, 30, 40];

// let copy = num.slice();
// console.log(copy);
// console.log(num);


// console.log(num.slice(-3, -1));

// console.log(num.slice(2));
// console.log(num.slice(-2));
// // console.log(num.slice(1, 3));


//Splice Method



// let numbers = [10, 20, 30, 40];


// let add = (2, 0, "5")//add

// let res = numbers.splice(1, 2);//delete
// let res = numbers.splice(0, 2);//delete
// let res = numbers.splice(0, 3);//delete
// let res = numbers.splice(0, 4);//delete
// console.log(add);
// console.log(numbers);




//Map in Js


// let arr = [10, 20, 30, 40];

// let res = arr.map(n => {

//     return n + 1;


// });
// console.log(res);


// let numbers = [5, 8, 10, 12, 14, 15];

// let res = numbers.map(a => {

//     return a * 2;
// });

// console.log(res);


// let numbers = [5, 8, 10, 12, 14, 15];

// let res = numbers.map(a => a * 2);
// console.log(res);



//Filter in js


// let numbers = [10, 20, 30, 40];

// let res = numbers.filter(num => num > 20 );
// console.log(res);
// console.log(numbers);

// let numbers = [10, 20, 30, 40, 50, 60];

// let res = numbers.filter(a => a > 30);
// console.log(res);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// let oddNumbers = numbers.filter(num => num % 2 === 1);
// let oddNumbers = numbers.filter(num => num % 2 !== 0);

// console.log("Odd", oddNumbers);
// console.log("Even", evenNumbers);
   
//Reduce in js 


// let arr = [10, 20, 30, 40, 50];

// let sum = arr.reduce((accumolator, current) => {

//     return accumolator + current;

// }, 0);

// let sum = arr.reduce ((accumolator, current) => accumolator + current, 0);//short syntax

// console.log(sum);
