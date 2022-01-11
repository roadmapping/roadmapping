const Goal = require("../Models/Goal");
const goalController = {};

goalController.getGoals = async function (req, res, next) {
  const goals = await Goal.find({ id: res.locals.id });
  if (!goals.length) {
    res.locals.goals = "no goals yet";
  } else {
    res.locals.goals = goals;
  }
  next();
};

goalController.createGoal = async function (req, res, next) {
  const { name, description } = req.body;

  try {
    const newGoal = await Goal.create({
      name,
      description,
      user: res.locals.id,
    });
    console.log(newGoal);
    next();
  } catch (error) {
    res.status(500).send("Error in creating goal");
  }
};

goalController.deleteGoal = async function (req, res, next) {
  const goalId = req.params.id;

  try {
    const goalToBeDeleted = await Goal.findByIdAndDelete(goalId);
    res.json(goalToBeDeleted);
  } catch (error) {
    res.status(500).send("Error in deleting goal");
  }
};

module.exports = goalController;
