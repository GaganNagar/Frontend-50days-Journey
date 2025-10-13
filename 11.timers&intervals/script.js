
let progressFill=document.querySelector(".progress-fill");
let progressText=document.querySelector("#progress-text");
let h1=document.querySelector("h1");
let container=document.querySelector(".container")
let downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click",function(){
    let count=0;
    h1.textContent = "Downloading...";
    progressFill.style.width = "0%";
    progressText.textContent = "0%";

    
    let interval= setInterval(function(){
        if(count<=99){
        count++;
        progressFill.style.width=`${count}%`;
        progressText.textContent=`${count}%`;
    }
    else{
        h1.textContent="Downloaded."
        let dltBtn=document.createElement("button");
        dltBtn.setAttribute("id","dlt-button");
        dltBtn.textContent="Delete";
        container.appendChild(dltBtn);

        dltBtn.addEventListener("click",function(e){
            let deleteBtn=setTimeout(function(){
                let parentElement=e.target.parentElement;
                parentElement.remove();
                clearTimeout(dltBtn);
            },2000);
        })
        clearInterval(interval);
    }
},5000/100)  //// second a ajyga 

});


// let timeOut= setTimeout(function(){
    // if(h1==="Downloaded"){
        // container2.remove();
    // }
    // else clearTimeout(timeOut);
// },3000);

