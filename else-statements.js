function testElse(val) {
    var result = "";

    if (val > 5){
        result = "Bigger than 5";
    } 
    else {
        result = "Smaller than 5";
    } 


    return result;
}

console.log(testElse(4)); //Output  Smaller than 5
