import express from "express";
import { router } from "./routes/routeUrl.js";
import mongoose from "mongoose";
import path from "path";
import { staticRouter } from "./routes/staticRoute.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const port = process.env.PORT;

mongoose
  .connect(process.env.MongodbKey)
  .then(() => console.log("mongodb is connected"));

app.use("/url", router);
app.use("/", staticRouter);

app.listen(port, () => console.log(`Server is running on 3000 `));
