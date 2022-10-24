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
  }
  const task = await Task.create(req.body);
  res.json(task);
});

router.get("/", async (req, res) => {
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

// router.get("/:placeId", async (req, res) => {
//   let placeId = Number(req.params.placeId);
//   if (isNaN(placeId)) {
//     res.status(404).json({ message: `Invalid id "${placeId}"` });
//   } else {
//     const place = await Place.findOne({
//       where: { placeId: placeId },
//       include: {
//         association: "comments",
//         include: "author",
//       },
//     });
//     if (!place) {
//       res
//         .status(404)
//         .json({ message: `Could not find place with id "${placeId}"` });
//     } else {
//       res.json(place);
//     }
//   }
// });

module.exports = router;
