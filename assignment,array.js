//Array in JavaScript Assignment


//Section 1 - Basic Array Operations

// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits);

// let arr1 = ["HTML", "CSS"];
// // console.log(arr1.push("Javascript"));
// let arr2 = arr1.push("Javascript");
// console.log(arr2);
// console.log(arr1);

// let arr1 = ["HTML", "CSS", "Javascript"];
// let arr2 = arr1.pop("Javascript");
// console.log(arr1);

// let color1 = ["Red", "Blue", "Green"];
// let color2 = color1.shift("Red");
// console.log(color1); 
// console.log(color2);


// let arr1 = ["CSS", "Javascript"];
// let arr2 = arr1.unshift("HTML")
// console.log(arr1);


// let arr1 = ["HTML", "CSS"];
// let arr2 = arr1.push("Javascript", "React");
// console.log(arr1);




//Section 2 - splice() and slice() 

// let arr1 =  ["HTML", "CSS", "JavaScript", "React"];
// let arr2 = arr1.splice(1, 1);//delete
// console.log(arr1);


// let arr1 = ["HTML", "JavaScript"]

// let arr2 = arr1.splice(1, 0, "CSS");//css Added
// console.log(arr1);

// let arr1 =  ["HTML", "CSS", "Java"] 
// let arr2 = arr1.splice(-1, 1, "Javascript");//Replace
// let arr2 = arr1.splice(2, 1, "Javascript");
// console.log(arr1);


//  let arr1 =  ["HTML", "CSS", "JavaScript", "React", "Node.js"];
// let arr2 = arr1.slice(1, 4);
// console.log(arr2);


//  let arr1 =  ["HTML", "CSS", "JavaScript", "React"];
// let copy = arr1.slice();
// console.log(copy);


//Section 3 - Searching in Arrays 

// let arr1 =  ["HTML", "CSS", "JavaScript", "React"];
// let result = arr1.indexOf("JavaScript");
// console.log(result);

// let arr1 =  ["HTML", "CSS", "JavaScript", "React"];
// let result = arr1.indexOf("React");
// console.log(result);




// let users = [

//     { name: "Vikash", age: 20 },
//     { name: "Kajal", age: 22 }

// ] 

// let user = users.find(function(user) {
//   return user.name === "Vikash";
// });

// console.log(user);




//Section 4 - Other Array Methods 


// let arr1 = [1, 2, [3, 4]];
// let res = arr1.flat();
// console.log(res);



// let arr1 =  [1, [2, [3, 4]]] 
// let res = arr1.flat(2);
// console.log(res);




// let lan =  ["HTML", "CSS", "JavaScript", "Python", "Java"];
// lan.forEach(function(lan, index) {
//   console.log(index, lan);
// });
