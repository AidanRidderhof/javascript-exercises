const fibonacci = function(num) {
    num = Number(num);


    if (num<0) {
        return "OOPS";
    }
    if (num==0) {
        return 0;
    }

    var arr = [];
    for (let i = 0; i<=num; i++){
        if (i==0 || i==1){
            arr[i]=1;
        }
        else {
            arr[i]= arr[i-1]+arr[i-2];
        }
    }
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
