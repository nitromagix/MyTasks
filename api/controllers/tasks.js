const router = require("express").Router();
const jwt = require("json-web-token");
const db = require("../models");

const { Task } = db;

router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

module.exports = router;