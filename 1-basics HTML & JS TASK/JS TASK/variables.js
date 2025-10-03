// variable

//var it is global scope  and functional scope 

var d=10;      //declaration
d=20  //right        ///reasign
var d=30 //right    redeclaration
console.log(d)   /// chlega output 30





var a=10
console.log(a);   //right



console.log(b)  ///rigth no error but undefined

var b=10;    //its breakdown in two parts first b=undefined and goes to top AND second b=10 initialize



{
    var c = 10
}

console.log(c)    //right chlega because ye block ko respect nhi krta 


//functional scope

function add(x){
    var y=10;
    console.log(x+y);
}
add(10);

//lkin jb hm 
//console.log(y)  /////errror AYGA  because of that y is functional scope and not run out of function 






let K =10; ///declaration   initialize
K=20/// chelga    reassign
//let K =30 ;    ////errrror because let is not redeclaraion

//and this is block scope
{
    let G=10
    console.log(G)    ///chlega because block scope 
 }


{
    let x=10;

 }
// console.log(x)   //error because this variable define in block 


 const j =10;   //declare    initialize
// j=20;   //  error in reassign 
 //const j =30;  ///wrong no redeclare

 console.log( j)   ///output   20