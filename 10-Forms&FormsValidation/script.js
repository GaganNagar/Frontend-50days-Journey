let form=document.querySelector("form");
let Name=document.querySelector("#Name");   //name input

let nameError=document.querySelector("#nameError")

form.addEventListener("submit",function(dets){
 dets.preventDefault();
 nameError.textContent=""
//hamko error show karana ki character less 3 h agar input name ki vlaue 3 charac. se kam h to 
// let hideDiv=document.querySelector("#hide")   
//  if(Name.value.length<=2){
//     hideDiv.style.display="initial"
//  }
//  else{
//     hideDiv.style.display="none"
//  }

const nameRegix = /^[a-zA-Z0-9_]{3,15}$/    // value name jo h gag true,123 true because pattern k andr ki value match ho rhi 
let trimedName=Name.value.trim();
// /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{8,15}$/     ye uske liye agar aapko ek letter capital or also nuber and ek character chaiye


let nameRegixAns = nameRegix.test(trimedName)    //input ki value ko pakad kar read krva rhe or match krva rhe username k regix variable se ki us pattern se match hai ya nhi 

if(!nameRegixAns){
   nameError.textContent="Username must be 3-15 characters and can only contain letters, numbers, and underscores."
}

})

