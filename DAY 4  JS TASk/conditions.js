/// if else ,else if ,else , early return

// if (12 < 20) {
//     console.log("hii");
// }
// else {
//     console.log("minor");
// }

// let stdMarks = prompt("ENTER YOUR MARKS")
// if (stdMarks >= 90 && stdMarks <= 100) {
//     console.log("YOUR GRADE IS A");
// }
// else if (stdMarks >= 75 && stdMarks < 90) {
//     console.log("YOUR GRADE IS B");
// }
// else if (stdMarks >= 50 && stdMarks < 75) {
//     console.log("YOUR GRADE IS C");
// }
// else if (stdMarks >= 33 && stdMarks > 50) {
//     console.log("YOUR GRADE IS D");
// }
// else {
//     console.log(" YO'RE FAIL");
// }


// write a function getGrade(score) that:
// 1.takes the student marks (0 to 100)
//2. return the grade based this logic:
//90-100 A++
//80-89 A
//70-79 B
//60-69 C
//33-59 D
//0-32 FAIL

// function getGrade(score) {
//     if (score >= 90 && score <= 100) {
//         return "A++";
//     }
//     else if (score >= 80 && score <= 89) {
//         return "A";
//     }
//     else if (score >= 70 && score <= 79) {
//         return "B"
//     }
//     else if (score >= 60 && score <= 69) {
//         return "C"
//     }
//     else if (score >= 33 && score <= 59) {
//         return "D"
//     }
//     else if (score >= 0 && score <= 32) {
//         return "FAIL"
//     }
//     else return "INVALID INPUT "
// }
// console.log(getGrade(92));


// //rock paper sceicer
// function rps(user,computer){
//     if(user===computer) return "DRAW"
//     if(user==="rock" && computer==="sceicer") return "user";
//     if(user==="scicer" && computer==="rock") return "computer";
//     if(user==="paper" && computer==="rock") return "user";
//     if(user==="rock" && computer==="paper")  return "computer";
//     if(user==="paper" && computer==="scicer") return "computer";
//     if(user==="sceicer" && computer==="paper") return "user";
// } 
// console.log(rps("paper","rock"))