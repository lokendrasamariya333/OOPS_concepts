// class Phone {
//     #pin;
//     constructor(pin){
//         this.#pin = pin;
//     }
//     unlock(enterPin){
//         if(enterPin=== this.#pin){
//             console.log("Phone Khula");
//         }else{
//             console.log("Wrong Pin");
//         }
//     }


// changePin(oldpin,newpin){
//     if(oldpin===this.#pin){
//         this.#pin = newpin;
//         console.log("password changed");
//     }else{
//         console.log("old pin is wrong");
//     }
// }

// }

// const myPhone = new Phone(333);

// myPhone.unlock(333);
// myPhone.changePin(333,1234);
// myPhone.unlock(1234);


class ATM{
    #balance;
    constructor(balance){
        this.#balance= balance;
    }
    deposit(money)
        {this.#balance= this.#balance + money;
               console.log("Rs "+money+" is credited. current balance "+this.#balance);
        }
    

    withdraw(money){
        if(money<=this.#balance){
            this.#balance = this.#balance-money;
            console.log("Rs "+ money +" debited. current balance: "+this.#balance);
        }else{
            console.log("insuficient balance")
        }
    }
}
const acc = new ATM(0);
acc.deposit(1000);
acc.deposit(5000);
acc.withdraw(500);
















