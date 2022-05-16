const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // check for status code, if none, set it to 500

  res.status(statusCode); //respond with set status

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
