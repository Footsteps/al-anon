import "./config/env.js";
import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js"
import { uploadErrorHandler } from "./middleware/uploadErrorHandler.js";
import { config } from "./config/config.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello i am here for you :)");
})

app.use("/contact", contactRoutes);

app.use(uploadErrorHandler);

app.listen(config.port, () => {
    console.log(`Server läuft auf http://localhost:${config.port}`);
})