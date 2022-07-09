const caesar = function(str, shiftVal) {
    while (shiftVal > 25){
        shiftVal -= 26;
        console.log(`shift reduced to ${shiftVal}`)
    }
    while (shiftVal < -25){
        shiftVal += 26;
    }
    function shift(currChar){
        let val = currChar.charCodeAt(0);
        let newCharCode;
        if (val < 65 || (val < 97 && val > 90) || val > 122) return currChar;
        if (val < 91){
            if (val + shiftVal > 90){
                newCharCode =  (val+shiftVal-26);
            }
            else if (val + shiftVal < 65){
                newCharCode =  (val + shiftVal +26);
            }
            else newCharCode =  val + shiftVal;
        }
        else{
            if (val + shiftVal > 122){
                newCharCode =  (val + shiftVal -26);
            }
            else if (val + shiftVal < 97){
                newCharCode =  val + shiftVal + 26;
            }
            else newCharCode = val + shiftVal;
        }
        let newChar = String.fromCharCode(newCharCode);
        console.log(`Shifted ${currChar} (${val}) to ${newChar} (${newCharCode})`);
        return newChar;
        
    }

    let strArr = str.split('');
    let newStr = '';
    strArr.forEach(thisChar => newStr += shift(thisChar));
    return newStr;
    

    



};

// Do not edit below this line
module.exports = caesar;
