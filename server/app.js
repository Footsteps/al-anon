import "./config/env.js";
import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js"
import { uploadErrorHandler } from "./middleware/uploadErrorHandler.js";
import { config } from "./config/config.js";

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean);

const app = express();

app.use(cors({
    origin(origin, callback) {
        if(!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Origin not allowed"));
        }
    }
    
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello i am here for you :)");
})

app.use("/contact", contactRoutes);

app.use(uploadErrorHandler);

app.listen(config.port, () => {
    console.log(`Server läuft auf Port ${config.port}`);
})