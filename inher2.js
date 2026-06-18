// Person class — constructor mein name lo.
// Student class — constructor mein name, school lo. super() use karo.
// study() method mein "{name} {school} mein padhta hai" print karo.
class Person {
    constructor(name){
        this.name = name;
    }
    study(){  
        console.log("my name is "+ this.name);
    }
}
class Student extends Person{
    constructor(name,school){
        super(name);
        this.school= school;
    }
    study(){
        console.log("my name is: "+ this.name+" my school's name is : "+this.school);
    }
}
const p1 = new Person("vikas");
const s1 = new Student("vinod","prince");

s1.study();
p1.study();