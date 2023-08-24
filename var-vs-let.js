var catName = "Madax madow";

var catName = "madax-gudud"

console.log(catName); 

// let operator
let catName = "madax-madow";

let catName = "madax-gudud";

console.log(catName); 
// when we are in let operator if we declare one value for two times we will get an error but in var we not

// but if we use to change the following way we would not get an error
let catName = "madax-madow";

catName = "madax-gudud";

console.log(catName); 

function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope(); 