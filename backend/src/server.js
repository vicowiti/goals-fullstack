const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

//handler middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

//test endpoint
app.get("/", (req, res) => {
  res.status(200).json("Up and running");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`.bgMagenta);
});
