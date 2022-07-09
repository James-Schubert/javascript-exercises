const getTheTitles = function(bookInfo) {
    let titles = [];
    bookInfo.forEach(book => titles.push(book.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
