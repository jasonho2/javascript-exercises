const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    returnString = '';
    let i = 0;
    while (i < num) {
        returnString += string;
        i++;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
