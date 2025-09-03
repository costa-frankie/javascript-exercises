const sumAll = function( a , b ) {

    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
 
    const startingNum = Math.min(a,b);
    const endingNum = Math.max(a,b);
    let sumResult = 0;
    
    for (i=startingNum; i <= endingNum; i++) {
        sumResult += i;
    }

    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
