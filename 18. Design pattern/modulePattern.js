// Module pattern -->
// model pattern ek design pattern Hai jismein Ham apna code ek self executing function IIFE ke andar likhate Hain taki variable or function private Rahe 

// iske andar Se Ham vahi chij return karte Hain Jo Bahar use karni hai 

// Is pattern ka main fayda Hai Data hiding (encapsuleshan) aur clean structure taki code secure, usable aur manageable Ban sake

let Bank = (function () {
    let bankBalance = 10000;
    function checkBalance() {
        console.log(bankBalance);
    }

    function setBalance(val) {
        bankBalance += val;
    }
    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(`withdrawal done, bankBalance availabe : ${bankBalance}`);
        }
        else {
            console.error(`unsufficeint balance, Your bankBalance is ${bankBalance}`);
        }
    }
    return {
        check: checkBalance,
        set: setBalance,
        withdraw: withdraw
    }

})();


// Ab Ham andar ki variable ko use nahin kar sakte jab tk vo  return na ho

//  jismein Bank ko object milega aur object ke andar hamen fnc ko bheja to Ham

// //agar key se hamne function return kiye to key s ham manipulate kar skte h
// Bank.check();
// Bank.set(1000);
// Bank.check();
// Bank.withdraw(11000);
// Bank.check();

// module pattern banaenge to vah Ham IIFE ke andar banaenge taki usme variable aur function private rhe

// jab humne return Kiya ek object to usko key ke sath return karte h to Jo hamne fnc or method or  variable  private banaye vo to unko key(name) s denote karke return karte h
// to vo revealing module kehlata h