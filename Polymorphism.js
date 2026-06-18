// //  Parent
// class Teacher {
//     constructor(naam) {
//         this.naam = naam;
//     }
//     teach() {
//         console.log("Padha raha hoon...");
//     }
// }

// // Children — sab ne teach() override kiya ─
// class MathsTeacher extends Teacher {
//     teach() {
//         console.log(this.naam + " maths padha raha hai!");
//     }
// }

// class EnglishTeacher extends Teacher {
//     teach() {
//         console.log(this.naam + " English padha raha hai!");
//     }
// }

// class ScienceTeacher extends Teacher {
//     teach() {
//         console.log(this.naam + " science padha raha hai!");
//     }
// }

// // Use karo 
// const teachers = [
//     new MathsTeacher("Rahul Sir"),
//     new EnglishTeacher("vaibhav sir"),
//     new ScienceTeacher("Arjun Sir")
// ];

// teachers.forEach(function(teacher) {
//     teacher.teach();   // same line — alag alag kaam
// });
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name + " kuch bol raha hai");
    }
}
class Dog extends Animal{
    speak(){
        console.log(this.name+ " bol rha hai: woof");
    }
}
class Cat extends Animal{
    speak(){
        console.log(this.name+ " bol rahi hai: Meow");
    }
}
class Parrot extends Animal{
    speak(){
        console.log(this.name+" bol raha hao: Hello");
    }
}
class Lion extends Animal {
    speak(){
        console.log(this.name+" bol rha hai : Roarrr")
    }
}
const animals = [ new Dog("Tommy"),
    new Cat("Kitty"),
    new Parrot("Mitthu")
    

]
// const animal1 = new Animal("horse");
// const dog1 = new Dog();
// const cat1 = new Cat();
// const parrot1 = new Parrot();
animals.push(new Lion ("Simba"))
animals.forEach(function(animal) {
    animal.speak();
});