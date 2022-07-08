const removeFromArray = function(myArray, a, b, c, d) {
    function removeItem(thisArray, targ){
        let ind = thisArray.indexOf(targ);
        if (ind == undefined || ind == -1){
            return thisArray;
        }
        else{
            thisArray.splice(ind,1);
            return thisArray;
        }
        }
    
    let targets = [a,b,c,d];
    targets.forEach(currentTarget => myArray = removeItem(myArray, currentTarget));
    
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
