const fs = require("fs");
exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};

exports.sendReqParam = (req, res, next) => {
    let book = req.params.bookID;
    res.send(`This is the page for ${book}`);
};

exports.customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      if (errors) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };