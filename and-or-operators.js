function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {
        return"Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10)); // Output No
// Comparisons with The Logical Or Operator
function testLogicalOr(val) {
    if (val < 10  || val >20 ) {
        return "Outside";
    }
    return "Inside";
} 
console.log(testLogicalOr(16)); // Output Inside  