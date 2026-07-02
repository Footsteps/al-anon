import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello i am here for you :)");
})

app.post("/contact", (req,res) => {
    console.log("post erhalten");

    res.json({
        success: true,
        message: "Backend hat die Anfrage bekommen."
    })
})


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
})