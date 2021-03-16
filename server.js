const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Todos = require("./todoModel");
const app = express();

mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/todo", (req, res) => {
  // to return all todo
  Todos.find({}, (err, list) => {
    if (err) console.log(err);
    res.send(list);
  });
});

app.post("/todo", (req, res) => {
  // to add todo
  console.log(req.body);
  Todos.create(req.body).then(() => {
    res.status(200).send(`Recived post request to add todo`);
  });
});

app.delete("/todo/:id", (req, res) => {
  // to delete todo
  console.log(req.params);
  Todos.deleteOne({ _id: req.params.id }, (err) => {
    if (err) console.log(err);
    else {
      res.redirect("/todo");
    }
  });
});

app.put("/todo/:id", (req, res) => {
  // to upadate todo
  console.log(`updating entry with ${req.params.id}`);
  Todos.updateOne(
    { _id: req.params.id },
    { name: req.body.name, time: req.body.time },
    (err) => {
      if (err) console.log(err);
      else {
        res.redirect("/todo");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Backend server is started on server port 3000");
});
