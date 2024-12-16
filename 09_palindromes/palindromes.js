const palindromes = function (string) {
    const palindromeCheckString = string.replace(/[\s\p{P}]/gu, '').toLowerCase();
    const reversedString = palindromeCheckString.split('').reverse().join('');
    return palindromeCheckString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
