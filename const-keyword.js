function printMyManyTimes(str) {
    "use strict";
    const SENT = str + " is cool!";
    for(let i = 0; i < str.lenght; i+=2) {
        console.log(SENT);
    }
}
printMyManyTimes("Abdimalik");