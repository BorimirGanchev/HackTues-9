const express = require("express");
const app = express();
const users_router = require("./router/main");
const connection_to_db = require("./db/main");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

//midleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://USER:USER_PASSWORD@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(express.json());
app.use("/users", users_router);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connection_to_db(
      "mongodb+srv://USER:USER_PASSWORD@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
