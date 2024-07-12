const sumAll = function(num1, num2) {
    if (typeof num1 === 'string' || num1 instanceof String || typeof num2 === 'string' || num2 instanceof String || num1<0 || num2<0 || num1.constructor === Array || num2.constructor === Array) {
        return 'ERROR';
    } 
    

    let count;
    let end;
    if (num1<num2) {
        count = num1;
        end = num2;
    }
    else {
        count = num2;
        end = num1;
    }

    let numLine= 0;
    while (count<=end) {
        numLine += count;
        count++;
    }
    return numLine;
};

// Do not edit below this line
module.exports = sumAll;
