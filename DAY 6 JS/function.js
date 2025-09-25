//1..what is the difference between function declaration  and function expression in the term of hoisiting.
// let discuss about fnc declaration in the term of hoisting
// add();   //:::: iska matlb hm function ko kahi bhi chla skte h fnc declaration ki hoisting hoti h :::::

// function add(){
//     console.log("huihui");
// }
//this is  all  normal fnc declaration in the term of hoisting ::::::::::::::::::::::::::::::::::::::::::::::::::


//sub(); yha fnc ko call nhi skte kyuki ye fnc expression h iski hoisting nhi hoti error aayga 
// let sub = function(){
//      console.log("hello");
// }
//sub();  //yha hm call kr skte yha fnc chlega

//2.... convert fnc into arrow fnc
// let multiply=(a,b)=>{
//     return a*b;
// }
//console.log (multiply(2,3));

//3....identify perameter and argument
// function welcome(Name){
//     console.log(Name);
// }
// welcome("Gagan");
////isme gagan jo h vo ek value h vo hi argument hai 
///or Name jo h vo perameter hai


//4... what does thee ...operator mean in perameters
// function num(...val){
//          console.log(val);
// }
// val(1,2,3,4,5);

//5.. use the rest perameter to accept any number  of scores and return the total
// function getScore(...scores){
//     let total=0;
//      scores.forEach(function(val){
//        total+=val;
//      })
//      return total
// }
// console.log(getScore(10,12,14,16))   //// smjhe kuch Gagan bhaiya ye h answer  

//6.. fix the fnc using early return
// function checkAge(age){
//     if(age<18){
//         console.log("Too young"); 
//     } else{
//         console.log("Allowed");
//     }
// }

//fix  function 👇
// function checkAge(age){
//     if(age<18) return "Too Young"
//     return "Allowed"
// }
// console.log(checkAge(23));         ///////   Allowed

//7.. what does it mean when we say "functions are first class citizen"

//  pass a function into another function and executed it inside
// function abcd(val){
//   val();
// }
// abcd(function(){
//     console.log("hey");
// });  //// this is ALSO A first class function   and also higher order function


///8.. identify which is hof function
// [1,2,3].map(function(x){
//     return x*2
// });   /// isme jo map vala function h vo higher order function h

//9.. pure vs impure
// let total=0;
// function addTotal(num){
//     total+=num
// }

//10.. what is the closure? when is it created.
// function abcd(){
//     let a=5;
//     return function(){
//         console.log(a);
//     }
// }   ///// ye fnc tb use hota h jb hm kisi fnc k andr kisi naye funtion ko calll kre or fnc parent fnc ki value use kare

// 11.. 
// function Outer(){
//     let Count=0;
//     return function(){
//         Count++;
//         console.log(Count);
//     }
// }
// const Counter = Outer();   ///0
// Counter()  ///1
// Counter()   ///2