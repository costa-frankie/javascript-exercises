    //Implement a function that takes an array and some other arguments then removes the other arguments from that array:


const removeFromArray = function(arr, ...args) {
    const newArray = [];
    //iterate over mystartingArray to check if an argument exists in the array, if NO -> add that item to the new array, else if YES -> don't do anything
    arr.forEach((value) => {
        if (!args.includes(value)) {
            newArray.push(value);
        };  
    }); 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

//The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

//- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
//- how to remove a single element from an array
//- how to deal with multiple optional arguments in a JavaScript function
//- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
