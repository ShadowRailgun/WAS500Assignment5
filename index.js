const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

  const mongoose = require("mongoose")
require("dotenv").config()
const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri,{useUnifiedTopology: true});
const db = mongoose.connection;
db.once("open", ()=> {
  console.log("Success")
})

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/home", homeController.home);
app.get("/", homeController.home);
app.get("/bookList", homeController.booklist);
app.get("/books/:bookID", homeController.books);
app.get("/honesty", homeController.honesty);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});