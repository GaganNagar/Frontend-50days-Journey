//async & await

let pr = new Promise(function(res,rej){
    setTimeout(()=>{
        let random = Math.floor(Math.random()*10)
        if(random>5) res("resolved with" + random)
        else rej("rejected with" + random) 
    },3000)
})

async function abcd() {
    try{
        let val = await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}
abcd()