class Student{
    constructor(name,marks){
        this.name= name;
        this.marks=marks;
    }
    result(prize){
        if(this.marks>=40){
            console.log("name "+ this.name+ " marks " + this.marks +" Pass");
        }else {
            console.log("name "+ this.name+ " marks " + this.marks +" Fail");
        }

    }
}
const s1 = new Student("Loki",95);
const s2 = new Student("mohan", 36);
const s3 = new Student("kailash",54);
s1.result();
s2.result();
s3.result();