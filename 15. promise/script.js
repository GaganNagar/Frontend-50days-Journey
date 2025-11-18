// promises

// jab aap ek promise banate ho jo ki 2 state me se ek state me ja sakta hai and vo resolve hoga ya
//  reject  ye to waqt btayega par hame dononke liye code likhna pdega  
// 

// ye ek simple example h promisee ka ki kese bnta h kam kese krta hai

let pr = new Promise(function(res,rej){
    setTimeout(()=>{
        let random = Math.floor(Math.random()*10)
        if(random>5) res("resolved with" + random)
        else rej("rejected with" + random) 
    },3000)
})
pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})
