const reverseString = function(forwardStg) {
    let front = 0;
    let rear = forwardStg.length-1;
    let stgArray = forwardStg.split('');
    let temp;
    while (front < rear){
        temp = stgArray[front];
        stgArray[front] = stgArray[rear];
        stgArray[rear] = temp;
        front++;
        rear--;
    }
    let reversed = '';
    stgArray.forEach(currentChar => reversed += currentChar);
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
