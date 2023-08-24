function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;
}
/*    
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
console.log(caseInSwitch(2));


// Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  switch (val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff"
  }
  return answer;
}
/*
a - apple
b - bird
c - cat
default - stuff
*/
console.log(switchOfStuff("c"));

// 
// Setup
function abTest(a, b) {


  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
/*
1-3 - Low
4-6 - Mid
7-9 - High
*/
console.log(sequentialSizes(1));

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
      case "bob": 
        answer = "Marley";
        break;
      case 42: 
        answer = "The Answer";
        break;
      case 1: 
        answer = "There is no #1";
        break;
      case 99: 
        answer = "Missed me by this much!";
        break;
      case 7: 
        answer = "Ate Nine";
        break;
    }
    return answer;
}
  
console.log(chainToSwitch(7)); 