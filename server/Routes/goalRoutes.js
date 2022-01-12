const router = require("express").Router();
const authenticate = require("../middleware/auth");
const {
  getGoals,
  createGoal,
  deleteGoal,
} = require("../Controllers/goalController");

router.get("/", authenticate, getGoals, (req, res) => {
  res.json(res.locals.goals);
});

router.post("/", authenticate, createGoal, (req, res) => {
  res.send("Goal creation successful");
});

// router.get("/home", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/componenets/Dashboard.jsx"));
// });

router.delete("/:id", authenticate, deleteGoal);

module.exports = router;
