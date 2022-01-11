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

router.delete("/:id", authenticate, deleteGoal);

module.exports = router;
