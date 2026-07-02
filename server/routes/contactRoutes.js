import express from "express";
import multer from "multer";

import { submitContactForm } from "../controllers/contactController.js";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("flyer"), submitContactForm);

export default router;
