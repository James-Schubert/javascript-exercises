const repeatString = function(stg, numRepeats) {
    let myStg = '';
    if (numRepeats < 0) return 'ERROR';
    for (let i = 0; i < numRepeats; i++){
        myStg += stg;
    }
    return myStg;
};

// Do not edit below this line
module.exports = repeatString;
