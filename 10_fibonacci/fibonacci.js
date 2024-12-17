const fibonacci = function(member) {

    //const member = parseInt(member);
    
    if (parseInt(member) < 0) {
        return "OOPS";
    }

    if (parseInt(member) === 0) {
        return 0;
    }

    if (parseInt(member) === 1) {
        return 1;
    }

    let fibonacciSequenceMember = 0;
    let current = 0;
    let next = 1;
    
    for (let i = 1; i < member; i++) {
        fibonacciSequenceMember = current + next;
        current = next;
        next = fibonacciSequenceMember;
    }

    return fibonacciSequenceMember;

};

// Do not edit below this line
module.exports = fibonacci;
