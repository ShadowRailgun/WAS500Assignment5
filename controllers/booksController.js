const Books = require("../models/books");

exports.getAllBookss = (req, res, next) => {
  Books.find({}, (error, books) => {
    if (error) next(error);
    req.data = books;
    next();
  });
};

//exports.getSubscriptionPage = (req, res) => {
  //res.render("contact");
//};

exports.saveBooks = (req, res) => {
  let newBooks = new Books({
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
  });
  newBooks.save((error, result) => {
    if (error) res.send(error);
    console.log("Success")
  });
};