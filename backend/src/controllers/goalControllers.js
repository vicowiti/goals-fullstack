const asyncHandler = require("express-async-handler");

//@Desc:  Get goals
//@route: GET /api/goals
//@access: Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get goal` });
});

//@Desc:  Set goal
//@route: POST /api/goals
//@access: Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Kindly add text in the goals field");
  }
});

//@Desc:  Update goal
//@route: PUT /api/goals/:id
//@access: Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@Desc:  Delete goal
//@route: DELETE /api/goals/:id
//@access: Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
