const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const login_user = require("./mongo");
const port = process.env.PORT || 8080;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const templatePath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/home", (req, res) => {
  res.render("home");
});

// Login User

app.post("/login", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await login_user.insertMany([data]);

  res.render("home");
});

//  Sign Up User

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await login_user.insertMany([data]);

  res.render("home");
});

app.listen(8080, () => {
  // console.log("port connected");
});
