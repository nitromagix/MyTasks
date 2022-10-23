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
    console.log(req.body);
    const task = await Task.create(req.body);
    res.json(task);
  }
});

router.get("/", async (req, res) => {
  const id = req.currentUser?.uid;

  if (id) {
    const tasks = await Task.findAll({
      where: {
        userId: id,
      },
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
