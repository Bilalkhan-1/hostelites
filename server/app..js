const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./schema/userSchema.js");
const complain = require("./schema/complainSchema.js");
const request = require("./schema/requestSchema.js");
const room = require("./schema/roomSchema.js");
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

app.get("/getRooms", async (req, res) => {
  try {
    room.find({}, (err, data) => {
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

app.post("/addRoom", async (req, res) => {
  console.log("here");
  var obj = new room({
    name: req.body.name,
    price: req.body.price,
    noOfBeds: req.body.noOfBeds,
    wifi: req.body.wifi,
    parking: req.body.parking,
    availability: req.body.availability,
  });
  console.log(obj);
  try {
    await obj.save();
    res.send(obj);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/addComplain", async (req, res) => {
  var obj = new complain({
    name: req.body.name,
    email: req.body.email,
    complainTitle: req.body.complainTitle,
    complainText: req.body.complainText,
    resolved: req.body.resolved,
  });
  console.log(obj);
  try {
    await obj.save();
    res.send(obj);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/getComplains", async (req, res) => {
  try {
    complain.find({}, (err, data) => {
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

app.delete("/deleteComplain", async (req, res) => {
  try {
    const result = await complain.deleteOne({ _id: req.body.id });
    console.log(result);
    if (result.deletedCount >= 1) {
      res.send("deleted successfully....");
    } else {
      res.send("unable to delete");
    }
  } catch (e) {
    res.send(e.message);
  }
});
app.delete("/deleteRoom", async (req, res) => {
  try {
    const result = await room.deleteOne({ _id: req.body.id });
    console.log(result);
    if (result.deletedCount >= 1) {
      res.send("deleted successfully....");
    } else {
      res.send("unable to delete");
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/getRequest", async (req, res) => {
  try {
    request.find({}, (err, data) => {
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

app.post("/addRequest", async (req, res) => {
  var obj = new request({
    name: req.body.name,
    roomNo: req.body.roomNo,
    bedNo: req.body.bedNo,
    institute: req.body.institute,
    phone: req.body.phone,
  });
  console.log(obj);
  try {
    await obj.save();
    res.send(obj);
  } catch (error) {
    console.log(error.message);
  }
});

const CONNECTION_URL =
  "mongodb+srv://bilalkhan:bilal123@cluster0.n6u0ovz.mongodb.net/?retryWrites=true&w=majority";

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
