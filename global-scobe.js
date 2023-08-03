var myGlobal = 10;


function fun1() {
    oopsMyGlobal = 5;
};
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsMyGlobal != "undefined") {
    output += "oopsMyGlobal: " + oopsMyGlobal;
    }
    console.log(output);
    
};
fun1();
fun2(); 
