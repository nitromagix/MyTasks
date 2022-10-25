const router = require("express").Router();
const jwt = require("json-web-token");
const db = require("../models");

const { Task } = db;

const fixDate = (date) => {
  const originalDate = new Date(Date.parse(date));
  const timezoneDate = new Date(
    originalDate.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
  );
  // const tzDate = new Date(timezoneDate);
  const fixedDate = new Date(
    timezoneDate.getFullYear(),
    timezoneDate.getMonth(),
    timezoneDate.getDate() + 1
  );
  return fixedDate;
}

router.post("/", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to add a task" });
  }

  const userId = req.currentUser?.uid;

  if (userId) {
    if (!req.body.userId) {
      req.body.userId = userId;
    }
    if (req.body.taskDate) {
      req.body.taskDate = fixDate(req.body.taskDate);
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
  const userId = req.currentUser?.uid;

  if (userId) {
    const tasks = await Task.findAll({
      where: {
        userId: userId,
      },
      order: [["taskDate", "ASC"]],
    });

    res.json(tasks);
  }
});

router.put("/:taskId", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to edit places" });
  }

  const userId = req.currentUser?.uid;
  let taskId = req.params.taskId;

  if (!taskId) {
    res.status(404).json({ message: `Invalid id "${taskId}"` });
  } else {
    const task = await Task.findOne({
      where: [{ uid: taskId }, { user_id: userId }],
    });
    if (!task) {
      res
        .status(404)
        .json({ message: `Could not find task with id "${taskId}"` });
    } else {
      Object.assign(task, req.body);
      await task.save();
      res.json(task);
    }
  }
});

router.get("/:taskId", async (req, res) => {
  if (!req.currentUser) {
    return res
      .status(403)
      .json({ message: "You are not allowed to add a task" });
  }
  const userId = req.currentUser?.uid;

  let taskId = req.params.taskId;
  console.log(taskId);
  const task = await Task.findOne({
    where: [{ uid: taskId }, { user_id: userId }],
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
