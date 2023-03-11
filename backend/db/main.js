const mongoose = require("mongoose");
db_connection = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }); //basic boilerplate connection , returns a promise
};

module.exports = db_connection;
