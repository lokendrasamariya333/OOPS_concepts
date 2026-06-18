// Account class — accountHolder, balance.
// SavingsAccount extends Account — apna interestRate property.
// CurrentAccount extends Account — apna overdraftLimit property.
// Dono ke objects banao, common method aur apna apna method call karo.
class Account{
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }info(){
        console.log("Account holder: "+ this.accountHolder+" Balance: "+ this.balance);
    }
}
class SavingAccount extends Account{
    constructor(accountHolder,balance,interestRate){
        super(accountHolder,balance)
        this.interestRate = interestRate;
    }
        showInterest(){
            console.log("Interest rate hai : "+this.interestRate);
        }
    }
class CurrentAccount extends Account{
        constructor(accountHolder,balance,overdraftLimit){
            super(accountHolder,balance)
            this.overdraftLimit = overdraftLimit;
        }
        showOverdraft(){
            console.log("Overdaft limit hai : "+this.overdraftLimit);
        }
    }
    const a1 = new Account("Lokendra",70450000);
    const s1 = new SavingAccount("Mahesh",4500000,7);
    const c1 = new CurrentAccount("Loki",2000000,60000);
    a1.info();
    s1.info();
    c1.info();
    s1.showInterest();
    c1.showOverdraft();
