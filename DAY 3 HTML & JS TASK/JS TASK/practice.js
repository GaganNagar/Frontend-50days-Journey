// 1. Variables (10 Questions)

// Declare a variable myName and store your name. Print it.
// let myName="Gagan Nagar"
// console.log(myName); 


// What’s the difference between var, let, and const? Try declaring with each.
// var a=10;   //declare  , value assign
// a=20; //right  reassign
// var a=30;  //right  redeclare
// console.log(a);    //output   30       and this is functional scope

// let x=10;  //assign  and declare
// x=20;    //reassign  right            this is block scope
//let x=30 // wrong  redeclare not allowed


// const y=10;  //declare and assign
//y=20;  // not allowed reassign
//const y=20 // not allowed redeclare


// Can you redeclare a variable defined with let? Try it.
//NO , let is not redeclare



// Create a const variable. Try reassigning it — what happens?
// show error  because const is not alllowed reassign



// Swap two variables (a=5, b=10) using a third variable.
// let a=5;
// let b=10;

// let temp=a; ///temp=5
// a=b; //a=10
// b=temp // b=5




// Swap two variables without a third variable.
// let a=5;
// let b=10;

// a=a+b; //5+10=15
// b=a-b //15-10=5
// a=a-b // 15-5=10

// console.log(a,b);


// What happens if you use a variable before declaring it with var vs let?
// var allowed redeclare     not show error and redeclared
// let not allowed redeclare  show error


// Show an example of block scope vs global scope with let and var.
// let Name="Kanhaa"

// {
//     let Name="Gagan"          //let respect block scope
//     console.log(Name); //Gagan
    
// }

// console.log(Name);  /// Kanhaa


// //var  not respect block scope
// var  a=10;

// {
//     var a=20;
//     console.log(a);  //20
    
// }
// console.log(a);  //20 this is global scope
//suppose 
// console.log(x);   output=20
// var x=20





// What’s the difference between declaring and initializing a variable? Show both.
//let x;   // this is declaring a variable and 
//let y=10   // initialize



// Predict the output:
//  console.log(x);  5
//  var x=5;
//  console.log(y);      error
 //let y = 10;


 
// 🟡 2. Data Types (10 Questions)

// Declare variables for string, number, boolean, null, undefined, and object.
// let fName="Nagar";
// let age=23;
// let isAdult=true;
// let caste=null;
// let domain;   //undefined
// const obj={
//     fName:"Gagan" ,
//     Last_Name:"Nagar"
// }



// // Use typeof on each of them and log results.
// console.log(typeof fName);
// console.log(typeof age);
// console.log(typeof isAdult);
// console.log(typeof caste);
// console.log(typeof domain);
// console.log(typeof obj);


// // What’s the difference between null and undefined? Show with code.
// let Name=null;   /// this is null    ,,when we are not give any value 
// let fullName;   //this is undefined  when we only declare variable


// What’s the result of:
// console.log(typeof NaN);   ///number


// Convert "123" (string) into a number using two different methods.
//let str="123";
// let NewStrNo=Number(str)
// let NewStrNo2=parseInt(str)

// let NewStrNo3=+str

// console.log(NewStrNo);
// console.log(typeof NewStrNo);
// console.log(NewStrNo2);
// console.log(NewStrNo3);



// Convert 100 (number) into a string using two different methods.

// let num1=100;
// let strNum=String(num1)
// let strNum2=+num1

// console.log(typeof num1);
// console.log(typeof strNum);
// console.log(strNum);
// console.log(strNum2);



// What happens when you do:

// console.log("5" - 2);    ////output=3
// console.log("5" + 2);      /////"52"


// What’s the type of an array in JS? Test it with typeof [].
// let arr=[1,2,3]
// console.log(arr,typeof arr); ////type of array ========object


 // What’s the type of function(){}? Use typeof.
// function add(){

// }
// console.log(typeof add);  // function




// Predict the output:

// console.log(typeof null === "object");   //trueeee




// 🔴 3. Operators (10 Questions)

// Declare a=10, b=3. Show results of +, -, *, /, %.
// let a=10;
// let b=3;
// console.log(a+b);    // 13
// console.log(a-b);      //7 
// console.log(a*b);      //30
// console.log(a/b);       //3.333..
// console.log(a%b);        //1


// Use ** operator to calculate 2^5.
// let a=2;
// console.log(a**5);  //32

// let b=2**5;
// console.log(b);


// Compare 5 == "5" and 5 === "5". Explain difference.
// console.log(5=="5");  //true because == comapare only values not type of variable
// console.log(5==="5");   // false becuase of === compare value and type both so its false because one number and one string
 


// Write an expression to check if a number is even or odd using %.
// let num1=6;
// let num2=7;
// if(num1%2==0){
//     console.log("even");
// } else{
//     console.log("odd");
// }

// if(num2%2==0){
//     console.log("even");
// } else{
//     console.log("odd");
// }


// Show an example of logical AND (&&) and OR (||).

// let isAdult=true;
// let isLoggedIn=false;

// if(isAdult && isLoggedIn){
//     console.log("trueeee");
//                            //output false because one side true and one side false && need both side true
// }else{
//     console.log("false");
    
// }

// if(isAdult || isLoggedIn){
//     console.log("trueeee");
//                                     //output=true because one value true
// }else{
//     console.log("false");
    
// }





// Use the ternary operator to check if age >= 18 → "Adult" else "Minor".\
// let age=23;
// let Ternary= age>=18?"Adult":Minor;
// console.log(Ternary);


// What’s the result of:

// console.log(5 > 3 > 1);      ///false


// If x = "10" and y = 5, what’s x + y vs x - y?
// let x="10"
// let y=5;
// console.log(x+y,x-y);     //x+y="105" ,x-y=5


// Show the difference between ++x and x++ with an example.
// let x=2
// ++x
// x++
// console.log(x);
// console.log(x);



// Predict the output:

// console.log(true + false);   //  1
// console.log(10 + "20");        // "1020"
// console.log("10" - "5");       //5