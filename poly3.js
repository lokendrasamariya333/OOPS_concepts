// Musical instrument wala example bana:
// Instrument class banao — play() method ho generic message print kare.
// Guitar, Piano, Drums — teeno classes banao Instrument se extend karke.
// Teeno mein play() override karo — apna apna sound message print kare.
// Teeno ke objects banao aur play() call karo.
class Instruments {
    constructor(name){
        this.name = name;
    }
    play(){
        console.log(this.name+ " baj raha hai");
    }
}
class Guitar extends Instruments {
    play(){
        console.log(this.name + " ka sound hai : ting-ting");
    }
}
class Piano extends Instruments {
    play(){
        console.log(this.name + " ka  sound hai: chiiu-chiiu");
    }
}
class Drums extends Instruments {
    play(){
        console.log(this.name + " ka sound hai : dum-dum")
    }
}
const g1 = new Guitar("guitarji");
const p1 = new Piano("pianoji");
const d1 = new Drums("drumji");
const i1 = new Instruments("baja");
g1.play();
p1.play();
d1.play();
i1.play();