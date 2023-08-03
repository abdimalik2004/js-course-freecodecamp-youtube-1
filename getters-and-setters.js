class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}; 
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temprature(){
            return this._temp;
        }
        set temprature(updatedTemp){
            this._temp = updatedTemp
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temprature;
thermos.temprature = 26;
temp = thermos.temprature;

console.log(temp);