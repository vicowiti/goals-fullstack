const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const PORT = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();
const app = express();

//handler middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// Serve frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../../", "frontend", "dist", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("set to production"));
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`.bgMagenta);
});
