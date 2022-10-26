const router = require("express").Router();
const jwt = require("json-web-token");
const db = require("../models");

const { Test } = db;

router.get("/", async (req, res) => {
  const test = await Test.findAll();

  res.json(test);
});

module.exports = router;
