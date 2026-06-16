//  Parent
class Teacher {
    constructor(naam) {
        this.naam = naam;
    }
    teach() {
        console.log("Padha raha hoon...");
    }
}

// Children — sab ne teach() override kiya ─
class MathsTeacher extends Teacher {
    teach() {
        console.log(this.naam + " maths padha raha hai!");
    }
}

class EnglishTeacher extends Teacher {
    teach() {
        console.log(this.naam + " English padha raha hai!");
    }
}

class ScienceTeacher extends Teacher {
    teach() {
        console.log(this.naam + " science padha raha hai!");
    }
}

// Use karo 
const teachers = [
    new MathsTeacher("Rahul Sir"),
    new EnglishTeacher("vaibhav sir"),
    new ScienceTeacher("Arjun Sir")
];

teachers.forEach(function(teacher) {
    teacher.teach();   // same line — alag alag kaam
});