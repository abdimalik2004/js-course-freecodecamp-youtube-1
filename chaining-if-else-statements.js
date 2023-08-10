function testSize(num) {
    if (num < 5) {
        return "Yinny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "large";
    } else {
        return "Huge";
    }
} 
console.log(testSize(7));  // Output Small 