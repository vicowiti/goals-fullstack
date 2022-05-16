const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

//@Desc:  Get goals
//@route: GET /api/goals
//@access: Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

//@Desc:  Set goal
//@route: POST /api/goals
//@access: Private
const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error("Kindly add text in the goals field");
  }
  console.log("we here");
  const goal = await Goal.create({ text });

  res.status(200).json(goal);
});

//@Desc:  Update goal
//@route: PUT /api/goals/:id
//@access: Private
const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error("The resource does not exist.");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@Desc:  Delete goal
//@route: DELETE /api/goals/:id
//@access: Private
const deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error("The resource does not exist.");
  }

  const deletedGoal = await Goal.findByIdAndDelete(id);
  res.status(200).json(deleteGoal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
