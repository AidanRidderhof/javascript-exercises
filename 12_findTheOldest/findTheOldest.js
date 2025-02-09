const findTheOldest = function(arr) {

    const order = arr.sort(function(a,b) {
        if (a.yearOfDeath==null){
            a.yearOfDeath=2024;
        }
        if (b.yearOfDeath==null){
            b.yearOfDeath=2024;
        }

        if ((a.yearOfDeath-a.yearOfBirth) < (b.yearOfDeath-b.yearOfBirth)) {
            return 1;
        }
        else {
            return -1;
        }
    })

    return order[0];
};

// Do not edit below this line
module.exports = findTheOldest;
