const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nicoeverettg:fauzan123@cluster0.3cgrwt7.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("not connected");
  });

