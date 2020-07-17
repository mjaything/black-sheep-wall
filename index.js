import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 4000;

const handleProfile = (request, response) => console.log("You're at Profile");
const handleHome = (request, response) => response.send("Hello");
const handleListening = () =>
  console.log(`Listening to: https://localhost:${PORT}`);

app.listen(PORT, handleListening);

// middleware logger
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
