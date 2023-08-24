function testElseIf(val) {
    if (val > 10) {
        return "Greater Than 10";
    } else if (val < 5) {
        return "Samller Than 5";
    } else {
        return "Between 5 and 10";
    } 
}; 
console.log(testElseIf(7)); //Output Between 5 and 10   