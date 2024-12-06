const reverseString = function(string) {
    returnString = "";
    let i = 0;
    while (i < string.length) {
        returnString += string[string.length - 1 - i];
        i++;
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
