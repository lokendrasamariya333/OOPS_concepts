// Shape class banao — area() method ho jo 0 return kare.
// Rectangle class banao (extends Shape) — constructor mein length, width lo.
//    area() override karo — length * width return kare.
// Triangle class banao (extends Shape) — constructor mein base, height lo.
//    area() override karo — 0.5 * base * height return kare.
// Dono ke objects banao, area() call karke console.log se print karo.
class Shape{
    constructor(name){
        this.name = name;
    }
    area(){
        console.log(this.make+ " ka area 0 hai");
    }
}
class Rectangle extends Shape{
    constructor(length,width){
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    area(){
        console.log(this.name +" ka area hai:"+ (this.length * this.width));
    }
}
class Triangle extends Shape{
    constructor(base,height){
        super("Triangle");
        this.base = base;
        this.height = height;

    }
    area(){
        console.log(this.name+" ka area hai : "+ (0.5*this.base*this.height));
    }
}
const R1 = new Rectangle(2,5);
const T1 = new Triangle(5,3);
R1.area();
T1.area();