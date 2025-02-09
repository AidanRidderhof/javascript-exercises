const palindromes = function (string) {

    let cleanstr = string
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .replace(' ', '');

    let reversestr = cleanstr
        .split('')
        .reverse()
        .join('');
    
    
    if (cleanstr == reversestr) {
        return true
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
