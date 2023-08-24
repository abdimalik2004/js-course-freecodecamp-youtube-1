function testEqual(val) {
    if (val == 12) {

        return "Equal";
    }
    return "Not Equal"
}  
console.log(testEqual(10)); // Output Not Equal couse it is 12

// Strict Equality operator
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal"
}
console.log(testStrict(10)); // Output  Not Equal  
// Comparing Different Values 
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
} 
console.log(compareEquality(10, "10")); // Output

// Comparison whith the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal"
}

console.log(testNotEqual(10)); //Output Not Equal

// Comparison whith the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {

        return "Not Equal";
    }
    return "Equal";

}

console.log(testStrictNotEqual(10)); // Output 
// Comparisons whith the Logical And Operator
function testGreaterThan(val) {
    if (val >100) {
        return "Over 100";
    }
    if (val >10) {
        return "Over 10";
    }
    return "10 or under";

}
console.log(testGreaterThan(10)); //Output 10 or under
// Comparisons whith the Logical Greater Than Or Equal To Operator 
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or under";
    }
    return "less than 10"
}

console.log(testGreaterThanOrEqual(10)); // Output 10 or under
// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or over"
}

console.log(testLessThan(10)); // Output Under 25
// Comparison with the Less Than  Or Equal To Operator
function testLessThanOrEqual(val) {
    if (val <=12) {
        return "smaller Than Or Equal to 12";
    }
    if (val <=24) {
        return "Smaller Than Or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessThanOrEqual(10)); // Output smaller Than Or Equal to 12  