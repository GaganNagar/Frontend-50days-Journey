// OOPS
// hame sikhna hai factories bnana , matlab ki aap log bs blueprint bana ki har bar ek object kesa dikhega
//  and hum log naye naye objects alg alg values k sath bana paynge, hi upar upar se pura kam hain.

// example  of constructor
// function CreateBiscuits(name,price,qty,company){
//     this.name=name;
//     this.price=price;
//     this.qty=qty;
//     this.company=company;
    

// }
// let b1= new CreateBiscuits("parleG",5, 10, "parle");
// let b2= new CreateBiscuits("oreo", 10, 5, "cadbury");



// agar company sare biscuits ki ek hi ho to hame usko har bar nhi send krna ya banana nhi
//  to ham kya karenge hm ek shared or extra memory me isko store karva denge  jisko prototytpe kehte h 

// function CreateBiscuits(name,price,qty,company){
//     this.name=name;
//     this.price=price;
//     this.qty=qty;
    
// }
// CreateBiscuits.prototype.company="Gagan ki company"   // prototype 
// let b1= new CreateBiscuits("parleG",5, 10);
// let b2= new CreateBiscuits("oreo", 10, 5);




// function CreatePencil(name, price, color, company){
//     this.name=name;
//     this.price=price;
//     this.color=color ;
//     this.company= company;

//     this.write=function(text){
//        let h1=document.createElement("h1");
//        h1.textContent=text;
//        h1.style.color=this.color;
//        document.body.appendChild(h1);
//     }
// }

// CreatePencil.prototype.owner="Gagan Nagar";

// let p1=new CreatePencil("Doms", 5, "blue", "doms");
// let p2=new CreatePencil("natraj", 10, "red", "natraj");


///clasess in js 

// class CreatePencil {
//     constructor(name, company, price, color) {
//         this.name = name;
//         this.company = company;
//         this.price = price;
//         this.color = color;
//     }

//     erase() {
//         document.body.querySelectorAll("h1").forEach((elem) => {
//             if (elem.style.color === this.color) {
//                 elem.remove();
//             }
//         });
//     }

//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// }

// let p = new CreatePencil("Apsara", "Apsara", 15, "blue");




//extends and super ka kam 
//ye jo h ek classical inheritance hai jo kisi or class se extends karke us class ki value inherit karna 

// class admin extends CreatePencil{
//     constructor(name, company, price, color){
//         super();    // uski value  ka access lene k liye ye kam karta h ya use hota h 
//         this.role="admin";
//     }

// }



//ye ek prototypal inheritance matlab ye sirf js me hi hota h matlb object se kisi or variable obj me purane obj 
//ki value inherit karna  obj=> obj

// let coffee = { 
//   color:"dark",
//   drink:function(){
//     console.log("gut gut gut");
//   }
// }
// let arabiataCoffee = Object.Create(coffee)  // ye h prototypal inherit
// console.log(arabiataCoffee);    
