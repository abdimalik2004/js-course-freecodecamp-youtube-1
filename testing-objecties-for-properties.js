var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
    } else {
      return "Not Found"
    }
    // Only change code above this line
} 
console.log(checkObj("gift"));  