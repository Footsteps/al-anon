import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello i am here for you :)");
})

app.use("/contact", contactRoutes);


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
})