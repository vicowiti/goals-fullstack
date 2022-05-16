const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB running at ${connect.connection.host}`.bgBlue);
};

module.exports = connectDB;
