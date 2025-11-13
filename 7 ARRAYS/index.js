// //let solve arrays questions for practices
// //1..create an array with three fruits and print the second fruits
// let fruits=["mango","banana","apple"]
// console.log(fruits[1]);


// // add the orange at the end of and pineapple at the beginning
// fruits.push("orange")
// fruits.unshift("pineapple")

// //replace banana with kiwi in the array above
// let fruit=["mango", "banana"]
// // fruit.pop();
// // fruit.push("kiwi")

// // what is the difference between push and unshift
// // push method use for add array data in eng of the array.
// //unshift method use for add array data at the beginning of array.

// //remove the last element in array using the method
// let number=[1,2,3,4,5]
// number.pop()

// //insert red and blue at index 1 in the array
// let color=["yellow", "green"]
// color.splice(1, 0, "red", "blue") 

// // extract only the middle 3 element from this array.
// let itmes=[1,2,3,4,5,6,7];
// let newitems=itmes.slice(2,5)

// //sort this array  and alphabetically and then reverse it.
// let names=["zara", "arjun", "mira", "bhavya"]
// names.sort().reverse()

// //use .map()  to square each number
// let arr=[2,3,4,5]
// let newArr=arr.map(function(val){
//     return val*val
// })


//use .filter() to keep number  greater than 10
// let number=[5, 12, 8, 20, 3]
// let newNumber=number.filter(function(val){
//     return val>10
// })

// // use .reduce() to fidn the sum of this array
// let arr=[10, 20, 30]
// let sumArr=arr.reduce(function(acc, val){
//     return acc + val
// },0)

// use .find() to get the first number less than 10
// let  num=[12, 15, 3, 8, 20]
// let newNum=num.find(function(val){
//     return val<10
// })


// //use .some() to check if any student  has scored below 35;

// let some=[40, 60, 28, 90]
// let newSome=some.some(function(val){
//     return val<35
// })


// //use .every()  method for check
// let eve=[2, 4, 6, 8, 10]
// let newEve=eve.every(function(val){
//     return val % 2=== 0;
// })

// destructure this array to get firstName and  lastName
// let fullName=["Gagan", "Nagar"]
// let [firstName, lastName]= fullName;



///merge two array using spread operator

// let num=[1, 2, 3, 4, 5]
// let num2=[6, 7, 8, 9, 10]
// let newNum=[...num, ...num2]


//add "India" to the start of this array using spread operator
// let countries=["UK", "US"]
// countries=["INDIA", ...countries]

//clone this array properly(not by reference)
// let arr=[1, 2, 3]
// let newArr=[...arr]



// let arr = [3, 7, 1, 9, 2];
// let max = Math.max(...arr);
// console.log(max);


// let arr = [1, 2, [3, 4], [5]];
// let flatArr = arr.flat();
// console.log(flatArr);


// let arr = [1,2,2,3,3,4];
// let unique = [...new Set(arr)];
// console.log(unique);
