const magic = () => new Date();



// Write Arrow Functions with Paramaters 
const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
console.log(myConcat([1, 2], [3, 4, 5]));

//write Higher Order Arrow Functions
const realMumberArray = [4,5.6, -9.8, 3.14, 42, 6, 8.35, -2];
const squarList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
};


const squareIntegers = squarList(realMumberArray);
console.log(squareIntegers); 