import express from "express";

export const staticRouter = express.Router();

staticRouter.get("/", (req, res) => {
  return res.render("home");
});
