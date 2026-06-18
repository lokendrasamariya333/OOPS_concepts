// Person class banao — sirf greet() method, "Namaste!" print kare.
// Student class banao jo Person se extend kare — apna study() method add karo.
// Object banao, dono methods call karo.
class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed= breed;
    }
    bark(){
        console.log(this.name+" "+this.breed+" is barking");
    }
}
const d1 = new Dog("puppy", "huski");
const a1 = new Animal("Cow");
d1.eat();
a1.eat();
d1.bark();

class Person{
    greet(){
        console.log("Namaste!")
    }
}
class Student extends Person{
    study(){
        console.log("Mera study method")
    }
}
const p1 = new Person();
const S1 = new Student();
p1.greet();
S1.study();
S1.greet();