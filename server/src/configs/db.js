const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/covid-tracker-Data?retryWrites=true&w=majority"
  );
};
