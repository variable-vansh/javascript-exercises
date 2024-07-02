const getTheTitles = function (books) {

    const titles = books.map(getTitles)

    function getTitles(book) {
        return book.title;
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
