const express = require("express");
const app = express();
const users_router = require("./router/main");
const connection_to_db = require("./db/main");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all domains to access the server
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allow specific headers
  next();
});
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://user123:user123@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority",
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
      "mongodb+srv://user123:user123@task-manager.8d8g6sk.mongodb.net/HACKTUES?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
