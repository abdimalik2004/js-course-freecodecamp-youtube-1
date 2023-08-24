//local scope have more power than global when consoling
var outWear = "T-Shirt";
function myOutfit() {
    var outWear = "sweater"

    
    return outWear;
};
console.log(myOutfit());
console.log(outWear);