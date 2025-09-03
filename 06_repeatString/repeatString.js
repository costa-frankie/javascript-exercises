let string = "hello";
let num = 10;

const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let myString = "";
    
    for (let i = 0; i < num; i++) {
        myString = myString.concat(string);
    }
    return myString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
