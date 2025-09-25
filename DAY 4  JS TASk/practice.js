// Check karo ki ek number positive ya negative hai.
// let num=-12;
// if(num>=0){
//     console.log("positive");
// }
// else {
//     console.log("negative");
// }


// Ek number even hai ya odd check karo.
// let num=11;
// if(num%2===0){
//     console.log("even");
// }
// else 
// {
//     console.log("odd");
// }


// Ek person ka age ≥ 18 hai toh “Adult” print karo else “Minor”.
// let age=17;
// if(age>=18){
//     console.log("adult");
// }
// else{
//     console.log("minor");
// }


// 2 numbers me se bada kaunsa hai, print karo.
// let a = 25;
// let b = 40;

// if (a > b) {
//     console.log("Greater number is:", a);
// } else if (b > a) {
//     console.log("Greater number is:", b);
// } else {
//     console.log("Both numbers are equal");
// }



// Check karo ki ek number divisible hai 5 aur 11 se ya nahi.
// let num=110;
// if(num%5===0 && num%11===0){
//     console.log("HA");
// }
// else {
//     console.log("NHI");
    
// }


// 🟡 Intermediate Level (Nested If & Else-If) 

// 3 numbers me se sabse bada number find karo.
// let a=5;
// let b=10;
// let c=15;
// if(a>b && a>c){
//     console.log("A is big number");
// }
// else if(b>a && b>c){
//     console.log("b is big number");
// }
// else if(c>a && c>b){
//     console.log("c is big number");
// }
// else {
//     console.log("Some numbers are equal");
// }

// Ek student ka percentage input lo aur grading system banao:

// ≥90 = A, ≥75 = B, ≥50 = C, else Fail.
// let prct = Number(prompt("Enter your percentage:"));
// if (isNaN(prct)){
//     console.log("INVALID INPUT");
// }
// else if (prct >= 90 && prct <= 100) {
//     console.log("A");
// }
// else if (prct >= 75 && prct <= 89) {
//     console.log("B");
// }
// else if (prct >= 50 && prct <= 74) {
//     console.log("C");
// }
// else if (prct >= 33 && prct <= 49) {
//     console.log("D");
// }
// else if (prct < 33 && prct >= 0) {
//     console.log("FAIL");
// }
// else {
//     console.log("INVALID INPUT RANGE (0–100 only)");
// }


// Ek year leap year hai ya nahi check karo.
// let year = 2024;

// if (year % 400 === 0) {
//     console.log(year, "is a Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log(year, "is NOT a Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log(year, "is a Leap Year");
// }
// else {
//     console.log(year, "is NOT a Leap Year");
// }


// Temperature input lo aur print karo:
// 30 = “Hot”, 15–30 = “Pleasant”, <15 = “Cold”.
// let temp=29;
// if(temp>=30){
//     console.log("hot");
// }
// else if (temp>=15){
//     console.log("Pleasant");
// }
// else{
//     console.log("cold");
// }


// Ek character input lo aur check karo vowel hai ya consonant.
// let vowels = ['a','e','i','o','u','A','E','I','O','U'];
// let input = prompt("Enter Any alphabet");

// if (vowels.includes(input)) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

//second method

// let vowels = ['a','e','i','o','u','A','E','I','O','U'];
// let input = prompt("Enter Any alphabet");
// let isVowel = false;

// for (let i=0; i<vowels.length; i++) {
//     if (input === vowels[i]) {
//         isVowel = true;
//         break;
//     }
// }

// // console log loop ke baahar ek hi baar chalega
// if (isVowel) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }



// 🔴 Advance Level (Switch, Ternary, Logical Operators)

// Ek number 1–7 ke beech input lo aur uske hisaab se din print karo (“1 → Monday, 2 → Tuesday…”).


// Calculator banao (add, subtract, multiply, divide) using switch.


// Ek character input lo aur check karo: digit hai, alphabet hai, ya special character.

// Ternary operator ka use karke check karo ki number positive hai ya negative.

// Ek number divisible by 3 and 5 → print “FizzBuzz”, sirf 3 se → “Fizz”, sirf 5 se → “Buzz”, else → number.

// ⚫ Pro Level (Real-World Problems)

// ATM mini-system: User amount dalta hai, check karo agar ≥ 500 hai toh “Withdraw Successful”, warna “Insufficient Balance”.

// Traffic light system: Input = "red/green/yellow" → red → “Stop”, green → “Go”, yellow → “Wait”.

// Password validation: agar length ≥ 8 aur ek number include ho toh “Strong Password” else “Weak Password”.

// Movie ticket price:

// Age < 12 → ₹100

// Age between 12–60 → ₹200

// Age > 60 → ₹150

// Electricity bill calculator:

// ≤100 units = ₹5 per unit

// 101–300 units = ₹8 per unit

// 300 units = ₹10 per unit



