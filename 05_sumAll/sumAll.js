const sumAll = function(start, end) {
    result = 0;

    // check that each input is a positive integer
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }

    // switch the start and end numbers if start is greater than end.
    if (start > end) {
        endTemp = start;
        start = end;
        end = endTemp;
    }

    for (i = start; i < end + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
