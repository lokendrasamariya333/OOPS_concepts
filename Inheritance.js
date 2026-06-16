// // Parent class
// class Vehicle {
//   constructor(fuel, speed) {
//     this.fuel  = fuel;
//     this.speed = speed;
//   }

//   info() {
//     console.log("Fuel: " + this.fuel + " | Speed: " + this.speed);
//   }

//   start() {
//     console.log("Vehicle start ho gaya!");
//   }
// }

// // Child class — Car
// class Car extends Vehicle {
//   constructor(fuel, speed, doors) {
//     super(fuel, speed);   // Vehicle ka constructor chalao
//     this.doors = doors;   // Car ki apni property
//   }

//   honk() {
//     console.log("Car: Beep Beep!");
//   }
// }

// // Child class — Bike
// class Bike extends Vehicle {
//   constructor(fuel, speed) {
//     super(fuel, speed);
//   }

//   wheelie() {
//     console.log("Bike: Wheelie maar di!");
//   }
// }

// const car  = new Car("Petrol", 120, 4);
// const bike = new Bike("Diesel", 90);

// car.info();     // Vehicle se mila
// car.start();    // Vehicle se mila
// car.honk();     // Car ka apna

// bike.info();    // Vehicle se mila
// bike.wheelie(); // Bike ka apna


// ─── Parent Class ───
// class Phone {
//     constructor(brand, battery) {
//         this.brand   = brand;
//         this.battery = battery;
//     }

//     call() {
//         console.log(this.brand + " se call kar raha hai!");
//     }

//     message() {
//         console.log(this.brand + " se message bheja!");
//     }
// }

// // ─── Child Class ───
// class Smartphone extends Phone {
//     constructor(brand, battery, camera) {
//         super(brand, battery);   // ZARURI — parent ka constructor
//         this.camera = camera;
//     }

//     clickPhoto() {
//         console.log(this.camera + "MP se photo li!");
//     }

//     openApp(appName) {
//         console.log(appName + " open ho gaya!");
//     }
// }

// // ─── Objects ─
// const phone1   = new Phone("Nokia", 3000);
// const smart1 = new Smartphone("Samsung", 5000, 108);

// phone1.call();           // Nokia se call kar raha hai!
// smart1.call();         // Samsung se call kar raha hai!
// smart1.clickPhoto();   // 108MP se photo li!
// smart1.openApp("YouTube"); // YouTube open ho gaya!

class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound= sound;
    }
run(){
    console.log(this.name+" tej bhagta hai");
}
makesound(){
    console.log(this.name+ " bolta hai: "+ this.sound);
}
}
class Cat extends Animal{
    constructor(name,sound,speed){
        super(name,sound);
        this.speed=speed;
    }
    feature(){
        console.log(this.speed+" fast speed hai");
    }
}
const animal1 = new Animal("dog","woof");
const cat1 = new Cat ("maxi","meow",30);
animal1.run();
cat1.run();
cat1.feature();
animal1.makesound();
















