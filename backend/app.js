const express = require("express");
const app = express();
const users_router = require("./router/main");
const connection_to_db = require("./db/main");
require("dotenv").config();

//midleware

app.use(express.json());
app.use("/users", users_router);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connection_to_db(
      /*process.env.MONGO_URI*/ "mongodb+srv://HACK:MONGO_HACK@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
