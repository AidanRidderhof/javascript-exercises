const repeatString = function(word, count) {
    if (count < 0) {
        return "ERROR";
    }
    let bigWord =''
    while (count>0) {
        bigWord+=word;
        count--;
    }
    return bigWord;
};

// Do not edit below this line
module.exports = repeatString;
