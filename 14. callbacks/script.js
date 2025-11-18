//callbacks --> agar aap ek function ko ek or fnc bhj de rhe ho perameter me to vo perameter vala fnc callbacks kehlata hain 
// 1. Ye ek function hai jo calculation karega
function calculate(num1, num2, callbackFunction) {
    let sum = num1 + num2;
    // Calculation hone ke baad hum callback ko bulayenge
    callbackFunction(sum);
}

// 3. Function call karna

calculate(5, 10,function (result) {
    console.log("Total sum is: " + result);
} );

// Output: Total sum is: 15


console.log("Kaam shuru...");

// Step 1
setTimeout(() => {
    console.log("Step 1: User data aa gaya");

    // Step 2 (Nested inside Step 1)
    setTimeout(() => {
        console.log("Step 2: Data filter ho gaya");

        // Step 3 (Nested inside Step 2)
        setTimeout(() => {
            console.log("Step 3: Profile picture load ho gayi");
            console.log("Kaam Khatam!");
            
        }, 1000); // Step 3 delay

    }, 1000); // Step 2 delay

}, 1000); // Step 1 delay
// Callback,Ek function jo dusre function ko diya jata hai taaki wo baad mein run ho sake.
// Synchronous,Code line-by-line chalta hai (Wait karta hai).
// Asynchronous,"Code wait nahi karta, agle line pe chala jata hai (Isliye Callbacks ki jarurat padti hai)."
// Callback Hell,"Jab callbacks ke andar callbacks nest ho jate hain, code ""Pyramid"" jaisa dikhta hai aur messy ho jata hai."