import express from "express";
import { upload } from "../middleware/upload.js";
import { honeypot } from "../middleware/honeypot.js";

import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", upload.single("flyer"), honeypot, submitContactForm);

export default router;
