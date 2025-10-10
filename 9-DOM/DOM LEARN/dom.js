
// ///  get selecters and access text and innner html
// // let h1=document.getElementById("h1")
// // let h1=document.getElementsByClassName("h1")          same work karta h niche ka code bs class name se ese get karte h js m
// // let h1=document.querySelector("h1")           same work karta h niche ka code bs query selecter se first selecter get kiya h js m
// // let h1=document.querySelectorAll("h1")           same work karta h niche ka code bs query selecterAll se sare  selecter get kiya h js m
// // console.dir(h1);


// // h1.innerHTML= "<i>Hello Gagan Sir</i>";       //isme hm html dalenge mtlb agar andr extra html dalni hon to hm .innerHTML use kar skte h 
// // h1.innerText="Hello Gagan Bhai"
// // h1.textContent="Kya Haal Chaal Bhai"   //   .innerText or textContent are same use to change inner content in th  html 




// //attributes manipulation
// let a = document.querySelector("a")
// // a.href="https://www.google.com"   // ek ye tarika h attributes change karne ka 
// a.setAttribute("href", "https://www.google.com")          // agar attribute nhi h selecter m to eese set kar skte h  jaha pehele name and then value of attributes
// a.getAttribute("href")                //// attributesse  get karna uske andr kya 
// a.removeAttribute("href")            /// attribts  remove ho jyga 



// //forms related

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }



// //dynamic create 

// let para = document.createElement("p")
// para.innerText = "HELLO GAGAN BHAI"

// let gaganBhai = document.querySelector(".gagan")
// gaganBhai.appendChild(para)   // also we use prepend for add element to start

// // gaganBhai.removeChild(para)    

// //// let we discuss about adding style using dom manipulation

// //  gaganBhai.style.backgroundColor="green"   // bg color green
// //  gaganBhai.style.color="white"   // text color white 
// // gaganBhai.style.height="240px"

// let meraButton = document.getElementById("meraButton")
// //pehle tariak 
// //  meraButton.addEventListener("click",()=>{
// //     let New = document.createElement("div");
// //     New.innerHTML= "<i>ME NAYA DIBBA HU JO DOM KI MADAD SE BANA Hu</i>" ;
// //     New.style.color="white"
// //     New.style.backgroundColor="green"
// //     New.style.width="180px"
// //     New.style.height="280px"
// //     New.style.borderRadius="10px"
// //     New.style.padding = "15px";
// //     New.style.margin = "15px";
// //     document.body.appendChild(New);
// //  })


// // dusra tarika

// meraButton.addEventListener("click", hello)    // hello funciton ka name h jo direct likh skte h 
// let New;
// function hello() {
//   New = document.createElement("div");
//   New.innerHTML = "<i>ME NAYA DIBBA HU JO DOM KI MADAD SE BANA Hu</i>";
//   New.style.color = "white"
//   New.style.backgroundColor = "green"
//   New.style.width = "180px"
//   New.style.height = "280px"
//   New.style.borderRadius = "10px"
//   New.style.padding = "15px";
//   New.style.margin = "15px";
//   document.body.appendChild(New);
//   document.body.appendChild(removeButton)
// }


// let removeButton = document.createElement("button");
// removeButton.setAttribute("type", "button");
// removeButton.innerHTML = "<i>dibbe haatao</i>"
// removeButton.addEventListener("click", () => {
//   document.body.removeChild(New)
//   document.body.removeChild(removeButton);

//   //   let wBox=document.querySelector("#w3box")
//   //   document.body.removeChild(wBox)
// })
// // for click
// let button = document.querySelector("#newButton");
// button.addEventListener("click", function () {
//   button.innerHTML = "daba diya"
//   button.style.border = "5px solid"
//   button.style.backgroundColor = "green"
// })


// //for input
// let imp = document.querySelector("#newInput")
// imp.addEventListener("input", function (dets) {
//   // console.log(dets.data);
//   if (dets.data !== null) {
//     console.log(dets.data);
//   }
// })

// //for change

// let sel = document.querySelector("select")
// let h2 = document.querySelector(".h2")

// sel.addEventListener("change", function (chng) {
//   // h2.textContent="selected"   // for practices
//   h2.textContent = `${chng.target.value} device selected`
// })


// ///ab hm pdhenge keydown

// let div = document.querySelector(".div")
// let h1 = document.querySelector(".h1")
// window.addEventListener("keydown", function (kii) {
//   if (kii.key === " ") {
//     h1.textContent = " SPC";
//     div.style.backgroundColor = "black"
//   }
//   else {
//     h1.textContent = kii.key
//     const R = Math.floor(Math.random() * 256)   // red k liye
//     const G = Math.floor(Math.random() * 256)   // red k liye
//     const B = Math.floor(Math.random() * 256)   // red k liye
//     div.style.backgroundColor = `rgb(${R},${G},${B})`
//   }
// })



// /// dekho niche kya ho rha 
// let btnDiv=document.createElement("div");
// btnDiv.setAttribute("id","upBtn")
// btnDiv.innerHTML="upload Img";
// btnDiv.style.backgroundColor="rgba(11, 45, 80, 1)"
// btnDiv.style.padding="12px 22px"
// btnDiv.style.borderRadius="8px";
// btnDiv.style.color="white"
// btnDiv.style.fontWeight="800"
 
// let main=document.querySelector("#main").appendChild(btnDiv)

// let inputImage=document.querySelector("#inputImage")

// btnDiv.addEventListener("click",function(){
//   inputImage.click()
// })

// inputImage.addEventListener("change",function(dets){
//   const files=dets.target.files[0]
//       if(files){
//         btnDiv.textContent=files.name
//         // console.log(files.name);
        
//       }
// })




