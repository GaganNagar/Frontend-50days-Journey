//factory function pattern

// Ek function banate ho jo objects create karta hai.(factory = object banane ki machine)


// factory function pattern
// Ek aisa design pattern hai jisme hum ek simple fnc likhte hai jo naya object banakar return karta hai, bina class ya new keyword use kiye.


// Is pattern ka main idea hai → object creation ko ek function ke through control karna.


// Har baar jab tum factory fnc call karte ho, tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai.


//ye pattern specially usefull hai jab tumhe ek hi type ke bahut sare object chaiye jaise users,products,task etc.

function createProduct(name, price) {
    let stock = 10;

    return {
        name,
        price,

        checkStock() {
            console.log(stock);
        },

        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked – ${stock} pieces left.`);
            } else {
                console.error(`We only have ${stock} pieces left.`);
            }
        },

        refill(qty) {
            stock += qty;
            console.log(`Refilled the stock – ${stock} pieces now.`);
        }
    };
}

let iphone = createProduct("iphone", 70000);
iphone.checkStock();
iphone.buy(2);
iphone.refill(5);

let kitkat = createProduct("kitkat",10); //ek or naya product bana sakte h jo apna khud ka object value rkhega 
//same for kitkat products k sath call kar skte h 

// ye ek blueprint type h jese ham class or constructor s krte the 
