// // let lis=document.querySelector("li");
// // lis.forEach(function(val){
// //     console.log(val.textContent); 
// // });
// // //second way
// // for(let i=0; i<lis.clientHeight;i++){
// //     console.log(lis[i].textContent);
// // }

// // select a paragraph and replace its content with :
// // <b>updated</b>
// // let para=document.querySelector("p")
// // para.innerHTML="<b>updated</b>"
// // console.log(para);


// // add a highlight class to every even  item in a list 
// // let highlight=document.querySelectorAll("ul li:nth-child(2n)");
// // // console.log(highlight);

// // highlight.forEach(function(elem){ 
// //     elem.classList.add("hiColor")
// //     // console.log(elem);
// // })  


let main=document.querySelector(".main")
let input=document.querySelectorAll("input")
let fileInput=document.querySelector("#selectImg")
let uploadImg=document.querySelector(".uploadImg")

uploadImg.addEventListener("click",function(){
    fileInput.click();
})

fileInput.addEventListener("change",function(event){
    let selectedFile=event.target.files[0]
    if(selectedFile){
        uploadImg.textContent=selectedFile.name
    }
})

let submit=document.querySelector("button")

submit.addEventListener("click", function(formData){
    formData.preventDefault();


    let container=document.createElement("div")
      container.classList.add("container")
     
      let profile=document.createElement("div")
      profile.classList.add("profile")

      let img=document.createElement("img")
      img.setAttribute("src",input[0].value)

      let h2=document.createElement("h2")
      h2.textContent=input[1].value;
      let h3=document.createElement("h3")
      h3.textContent=input[2].value
      let p=document.createElement("p")
      p.textContent=input[3].value
      let dltBtn=document.createElement("button")
      dltBtn.textContent="Remove"
      dltBtn.classList.add("dltBtn")
    
      const R = Math.floor(Math.random() * 256)   // red k liye
      const G = Math.floor(Math.random() * 256)   // red k liye
      const B = Math.floor(Math.random() * 256)   // red k liye
      dltBtn.style.backgroundColor=`rgb(${R},${G},${B})` 
      container.style.backgroundColor=`rgb(${G},${B},${R})`   

     dltBtn.addEventListener("click",function(e){
       let  removeContainer = e.target.parentElement
       removeContainer.remove();
     })
     
      profile.appendChild(img)
      container.appendChild(profile)
      container.appendChild(h2)
      container.appendChild(h3)
      container.appendChild(p)
      container.appendChild(dltBtn)
    
      document.body.appendChild(container)
      input.forEach(function(dets){
        dets.value=""
      })

})




///gemini code for show select image on display

// // --- Element Selection ---
// let main = document.querySelector(".main");
// let input = document.querySelectorAll("input[type='text']"); // Sirf text inputs ko select karein
// let fileInput = document.querySelector("#selectImg");
// let uploadImg = document.querySelector(".uploadImg");
// let submit = document.querySelector("button");

// // Global variable to store the uploaded image data
// let uploadImgData;

// // --- Custom File Upload Trigger ---
// uploadImg.addEventListener("click", function() {
//     fileInput.click();
// });

// // --- File Selection Logic (The Corrected Part) ---
// fileInput.addEventListener("change", function(e) {
//     // FIX #1: File ko .files se pakdo, .value se nahi
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//         // Step 1: Upload area ka text file ke naam se badlo
//         uploadImg.textContent = selectedFile.name;

//         // Step 2: FileReader ka use karke image data nikalo
//         const reader = new FileReader(); // File padhne wala tool

//         // Jab reader file padh lega, tab yeh function chalega
//         reader.onload = function(event) {
//             // File ka data (Base64 string) is global variable mein save kar do
//             uploadImgData = event.target.result;
//         };

//         // Reader ko file padhne ka command do
//         reader.readAsDataURL(selectedFile);
//     }
// });

// // --- Card Creation Logic ---
// submit.addEventListener("click", function(formData) {
//     formData.preventDefault();

//     let container = document.createElement("div");
//     container.classList.add("container");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     // Yahan hum save kiya hua image data use karenge
//     img.setAttribute("src", uploadImgData || "default-placeholder.png"); // Agar image nahi hai to default

//     // Note: Ab text inputs alag se select hain, to index theek rahega
//     let h2 = document.createElement("h2");
//     h2.textContent = input[0].value; // Pehla text input

//     let h3 = document.createElement("h3");
//     h3.textContent = input[1].value; // Doosra text input

//     let p = document.createElement("p");
//     p.textContent = input[2].value; // Teesra text input

//     let dltBtn = document.createElement("button");
//     dltBtn.textContent = "Remove";
//     dltBtn.classList.add("dltBtn");

//     // Random colors for button and container
//     const R = Math.floor(Math.random() * 256);
//     const G = Math.floor(Math.random() * 256);
//     const B = Math.floor(Math.random() * 256);
//     dltBtn.style.backgroundColor = `rgb(${R},${G},${B})`;
//     container.style.backgroundColor = `rgb(${G},${B},${R})`;

//     // Delete button functionality
//     dltBtn.addEventListener("click", function(e) {
//         let removeContainer = e.target.parentElement;
//         removeContainer.remove();
//     });

//     // Append all elements
//     profile.appendChild(img);
//     container.appendChild(profile);
//     container.appendChild(h2);
//     container.appendChild(h3);
//     container.appendChild(p);
//     container.appendChild(dltBtn);

//     document.body.appendChild(container);

//     // Clear all inputs after submission
//     input.forEach(function(dets) {
//         dets.value = "";
//     });
//     // Upload area ko bhi reset kar do
//     uploadImg.textContent = "Upload Image";
//     uploadImgData = ""; // Global variable ko bhi reset kar do
// });



//lets practice again
