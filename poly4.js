// Task 3 wale teeno objects (Guitar, Piano, Drums) ko ek array mein daalo.
// forEach use karke sabka play() ek loop mein chalao.
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
const instru = [new Guitar("guitarji"),
new Piano("pianoji"),
new Drums("drumji"),
new Instruments("baja")];
instru.forEach(function (Item){
    Item.play();
});