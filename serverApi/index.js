import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import mysql from "mysql";
import bodyParser from "body-parser";
import session from "express-session";
import { passport } from "./auth.js";

const PORT = 3000;

const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test"
// });

// db.connect((err) => {
//   if (err) {
//     console.log(`Error connecting to database: ${err}`)
//     process.exit(1);
//   } else {
//     console.log("Connected to database");
//   }
// });

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.CLIENT_SECRET,
  resave: false,
  saveUninitialized: false
}));

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (_req, res) => {
  res.json({ message: "You are not logged in" });
})

app.get("/auth/failed", (_req, res) => {
  res.send("Failed");
})

app.get("/auth/success", isLoggedIn, (req, res) => {
  res.redirect("http://localhost:5173/welcome");
})

app.get("/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"]
  })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failed",
  }),
  function (req, res) {
    res.redirect("/auth/success")
  }
);

app.get("/auth/user", isLoggedIn, (req, res) => {
  res.send(req.user);
})

app.get("/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      req.logout(() => {});
    }
    res.redirect("http://localhost:5173/welcome");
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
