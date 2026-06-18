// Animal class banao jisme makeSound() method ho — generic message print kare.
// Cow class banao jo Animal se extend kare — makeSound() override karo "Moo!" print kare.
// Lion class banao jo Animal se extend kare — makeSound() override karo "Roar!" print kare.
// Dono ke objects banao aur makeSound() call karo.
class Animal {
    constructor(name){
        this.name = name;
    }
    makesound(){
        console.log(this.name + " animal bol  raha hai:");
    }
}
class Cow extends Animal{
    makesound(){
        console.log(this.name+ " bol rahi hai : Moo")
    }
}
class Lion extends Animal{
    makesound(){
        console.log(this.name+ " bol raha hai: Roar")
    }
}
const c1 = new Cow("Radha");
const l1 = new Lion("King");
const animal1 = new Animal("Goat");
c1.makesound();
l1.makesound();
animal1.makesound();
