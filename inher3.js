// Person class — name, age constructor mein.
// Student class — name, age, grade constructor mein.
// info() method banao jo sab print kare.
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    info(){
        console.log("my name is "+ this.name+" , my age is : "+ this.age); 
    }
}
class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;}
        info(){
        console.log("Name: "+this.name+" age: "+ this.age+" grade: "+this.grade);
    }
}
const p1 = new Person("Loki",24);
const s1 = new Student("vikas",22,"A");
p1.info();
s1.info();
