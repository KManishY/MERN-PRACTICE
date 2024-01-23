const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://devmanish:kmanishy@manish-database.qngxa4n.mongodb.net/User?retryWrites=true&w=majority";
const connection = mongoose.connect(MONGO_URL);

module.exports = {
  connection
};
