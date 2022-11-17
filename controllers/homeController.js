exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};

exports.sendReqParam = (req, res, next) => {
    let book = req.params.bookID;
    res.send(`This is the page for ${book}`);
};

exports.home = (req, res, next) => {
    res.render("index");
};

exports.booklist = (req, res, next) => {
    res.render("books");
};

exports.books = (req, res, next) => {
    let paramsName = req.params.bookID;
    res.render(paramsName);
};

exports.honesty = (req, res, next) => {
    res.render("honesty");
};