const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./schema/userSchema.js");

const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("", (req, res) => {
  console.log("Hostelites backend");
  res.send("bilal khan");
});

app.post("/saveUser", async (req, res) => {
  var obj = new user({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.emailString,
    password: req.body.passwordString,
  });
  console.log(obj);
  try {
    await obj.save();
    res.send(obj);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/getUsers", async (req, res) => {
  try {
    user.find({}, (err, data) => {
      if (err) {
        res({ error: "Could not connect to database." });
      } else {
        res.send(data);
      }
    });
  } catch (e) {
    res.status(500).send({ error: "An error occurred" });
  }
});

const CONNECTION_URL =
  "mongodb+srv://bilalkhan:bilal123@cluster0.bcloh.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("server running on port: ", PORT))
  )
  .catch((error) => console.log(error.message));
