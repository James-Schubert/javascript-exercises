const sumAll = function(num1, num2) {
    if(typeof(num1) != "number" || typeof(num2) != "number") return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';
    
    let start;
    let finish;
    if(num1 < num2){
        start = num1;
        finish = num2;
    }
    else{ 
        start = num2;
        finish = num1;
    }
    let sum=0;
    for(start; start <= finish; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
