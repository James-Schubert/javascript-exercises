const palindromes = function (stg) {
    let front = 0;
    let rear = stg.length-1;
    stg = stg.toLowerCase();
    while (rear > front){
        while (stg[front] == ' ' || stg[front] == '!' || stg[front] == '.' || stg[front] == ','){
            front ++;
        }
        while (stg[rear] == ' ' || stg[rear] == '.' || stg[rear] == ',' || stg[rear] == '!'){
            rear --;
        }
        if(stg[front] != stg[rear]) return false;
        front++;
        rear--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
