class Teacher {
    constructor(subject,experience){
        this.subject = subject;
        this.experience = experience;
    }
    info(){
        console.log("Subject "+ this.subject);
        console.log("Experience "+ this.experience);
    }
}
const t1 = new Teacher("English", 6);
t1.info();