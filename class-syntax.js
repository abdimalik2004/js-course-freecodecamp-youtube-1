class SpaceShuttle{
    constructor(targwtPalnet) {
        this.targwtPalnet = targwtPalnet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targwtPalnet);

function makeClass() {
    class Vegatable {
        constructor (name){
            this.name = name;
        }
    }
    return Vegatable;
}
const Vegatable = makeClass();
const carrot = new Vegatable('carrot');
console.log(carrot.name);  