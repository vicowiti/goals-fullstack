const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use("/api/goals", goalRoutes);

//test endpoint
app.get("/", (req, res) => {
  res.status(200).json("Up and running");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`.bgMagenta);
});
