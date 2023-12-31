import "./db";
import "./seedData";
import dotenv from "dotenv";
import express from "express";
import moviesRouter from "./api/movies";
import tvsRouter from "./api/tvs";
import genresRouter from "./api/genres";
import actorsRouter from "./api/actors";
import usersRouter from "./api/users";
import session from "express-session";
import passport from "./authenticate";
dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if (process.env.NODE_ENV === "production") {
    return res.status(500).send(`Something went wrong!`);
  }
  res
    .status(500)
    .send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

//session middleware
app.use(passport.initialize());

app.use(express.json());

app.use("/api/movies", moviesRouter);

app.use("/api/tvs", tvsRouter);

app.use("/api/genres", genresRouter);

app.use("/api/users", usersRouter);

app.use("/api/actors", actorsRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
