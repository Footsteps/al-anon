import express from "express";
import {upload} from "../middleware/upload.js";

import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", upload.single("flyer"), submitContactForm);

export default router;
