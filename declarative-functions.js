const bicycle = {
    gear: 2,
    setGear(newgear) {
        "use strict";
        this.gear = newgear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); 
