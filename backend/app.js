const express = require("express");
const app = express();
const router = require("./router/main");
const connection_to_db = require("./db/main");
require("dotenv").config();

//midleware

app.use(express.json());
app.use("/api/v1/user", router);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connection_to_db(
      /*process.env.MONGO_URI*/ "mongodb+srv://RADU:MONGOPASSWORD@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
