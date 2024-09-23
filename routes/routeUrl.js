import express from "express";
import  { handleGenrateNewUrl } from '../controllers/controllerUrl.js';
import { handleReplaceId } from "../controllers/controllerUrl.js";

export const router = express.Router();

router.post("/", handleGenrateNewUrl);

router.get("/:shortId", handleReplaceId );

