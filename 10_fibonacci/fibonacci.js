const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return 'OOPS';
    let sum = 1;
    let prevsum = sum;
    for (let i = 2; i< num; i++){
        sum += prevsum;
        prevsum = sum - prevsum;

    }
    return sum;S
};

// Do not edit below this line
module.exports = fibonacci;
