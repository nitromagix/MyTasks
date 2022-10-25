// Modules and Globals

require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cors = require("cors");
const defineCurrentUser = require("./middleware/defineCurrentUser");
// const tasksController = require('./controllers/task_controller');
const tasksController = require("./controllers/tasks");
const usersController = require("./controllers/users");
const authenticationController = require("./controllers/authentication");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(defineCurrentUser);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Controllers and Routes

app.use("/tasks", tasksController);
app.use("/users", usersController);
app.use("/authentication", authenticationController);

app.get("/", async (req, res) => {
  res.status(200).json({ mytasks: "home" });
});

app.get("*", async (req, res) => {
  res.status(404).json({ error: "404" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
