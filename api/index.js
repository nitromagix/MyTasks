// Modules and Globals

require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const cors = require('cors');
const tasksController = require('./controllers/task_controller');

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

// Controllers and Routes

app.use("/tasks", tasksController);

app.get("/", async (req, res) => {
  res.status(200).json({"home":"home"});
});

app.get("*", async (req, res) => {
  res.status(404).json({"error":"404"});
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
