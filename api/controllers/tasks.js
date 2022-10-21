const router = require("express").Router();
const jwt = require("json-web-token");
const db = require("../models");
const { trace } = require("../nmx");

const { Task } = db;

router.get("/", async (req, res) => {
  const id = req.currentUser?.uid;
  trace("tasks -> GET")(id)
  const tasks = await Task.findAll({
    where: {
      userId: req.currentUser?.uid,
    },
  });
  res.json(tasks);
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
