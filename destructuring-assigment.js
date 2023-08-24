var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; 
var y = voxel.y;
var z = voxel.z;

const { x : d, y : f, z : g } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tommorow: 79
};   
function getTempOFTmrw(avgTemperatures) {
    "use strict";
    const { tommorow : tempOfTomorow } = avgTemperatures;

    return tempOfTomorow;
}
console.log(getTempOFTmrw(AVG_TEMPERATURES));

//Destructing Assigment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 64, max: 77 },
    tomorrow: { min: 68, max: 80 }
};
function getMaxTempOFTmrw(forecast) {
    "use strict";


    const { tommorow : { max : maxOfTommorow }} = forecast;

    return maxOfTommorow;
}
    
console.log(getMaxTempOFTmrw(LOCAL_FORECAST));
//Destructing Assigment with Nested arrays
let a = 8, b = 6;
(() => {
    "use strict"
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

//Destructing Assigment with the Rest Operator
const abdi = [1,2,3,4,5,6,7,8,9,10] ;
function removeFirstTwo(list) {
    const [ , , ...arr ]= list;

    return arr;
}
const arr = removeFirstTwo(abdi);
console.log(arr);
console.log(abdi);

//Destructing Assigment to pass an Object as Function's Parameters
const stats = {
    max: 56.78,
    satandard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85
};
const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));