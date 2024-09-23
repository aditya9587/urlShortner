import { nanoid } from "nanoid";
import URL from "../models/modeUrl.js";

export async function handleGenrateNewUrl(req, res) {
  try {
    if (! req.body.url) {
      return res.status(400).send({ message: "send the url" });
    }
    const shortID = nanoid(8);
    await URL.create({
      shortId: shortID,
      redirectURL: req.body.url,
      // visitHistory: [],
    });
    // return res.redirect("/");
    return res.status(201).send({ shortID : shortID });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function handleReplaceId(req, res) {
  const { shortId } = req.params;
  const entry = await URL.findOne({ shortId });
  if (entry) {
    return res.redirect(entry.redirectURL);
  } else {
    return res.status(404).send({ message: "Entry not found" });
  }
}

