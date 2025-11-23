// performance optimization
 //TOPIC---1--->>>>>Debouncing 
// aap koi action kar  rhe ho and aap ye nhi chahte ki har action par kuch ho ,
// lkin jb bhi mere actions k bich koi specififc time ka gapa a jaye to fir,
// reaction perform karo or settime kardo ki itne seconbd bad result perform hoga isko hi debouncing kehte h 

// const input=document.querySelector("#search");

// function debounce(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer=setTimeout(() => {
//             fnc.apply(this,args);
//         }, delay);
//     }
// }

// input.addEventListener("input",debounce(function(e){
//     console.log(e.target.value);
// },1000))
//tum ek delay  time bataoge utna delay jab ayega tab action ka reaction milega---debouncing


//topic----2--->>>Throttling
//Interval par chalaunga ,action agar hota rha and apne ek interval bataya to utne interval me action ka reaction dunga

// function throttle(fnc,delay){
//     let timer=0;
//     return function(...args){
//         let now = Date.now();
//         if(now-timer>=delay){
//             timer=now;
//             fnc.apply(this,args)
//         }
//     }
// }
// input.addEventListener("input",throttle(function(e){
//     console.log(e.target.value);
    
// },2000)
// );


//topic--->>>code spliting
//js me bahut sari lines ka code hota h ab user kuch bhi action krega to puri js file reload hogi 
//isko fix karne k liye ham code spliting krenge, matlab user ko jo chahiye pehle vo load ho fhir 
//jab jo code ki jrurt pdti h tab use load karo.  through import and export

const btn = document.querySelector(".btn");


btn.addEventListener("click",async function(){
    try{
      const data = await import("./split.js");
        data.print();
    }
    catch(err){
        console.error(err);
       alert("Error loading module — check console for details");
    }
    
})
