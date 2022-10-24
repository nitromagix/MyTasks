const router = require("express").Router();
const jwt = require("json-web-token");
const db = require("../models");

const { Task } = db;

router.post("/", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to add a task" });
  }

  const id = req.currentUser?.uid;
  if (id) {
    if (!req.body.userId) {
      req.body.userId = id;
    }
    if (req.body.taskDate) {
      const taskDate = new Date(Date.parse(req.body.taskDate));
      const timezoneDate = new Date(
        taskDate.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
        })
      );
      // const tzDate = new Date(timezoneDate);
      const fixedDate = new Date(
        timezoneDate.getFullYear(),
        timezoneDate.getMonth(),
        timezoneDate.getDate() + 1
      );
      // console.log(fixedDate);
      req.body.taskDate = fixedDate;
    }

    const task = await Task.create(req.body);
    res.json(task);
  }
});

router.get("/", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to add a task" });
  }
  const id = req.currentUser?.uid;

  if (id) {
    const tasks = await Task.findAll({
      where: {
        userId: id,
      },
      order: [["taskDate", "ASC"]],
    });

    res.json(tasks);
  }
});

router.get("/:taskId", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to add a task" });
  }
  const id = req.currentUser?.uid;

  let taskId = req.params.taskId;
  console.log(taskId);
  const task = await Task.findOne({
    where: [{ uid: taskId }, { user_id: id }],
  });
  if (!task) {
    res
      .status(404)
      .json({ message: `Could not find task with id "${taskId}"` });
  } else {
    res.json(task);
  }
});

module.exports = router;
