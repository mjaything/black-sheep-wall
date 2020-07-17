import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 4000;

const handleProfile = (request, response) => console.log("You're at Profile");
const handleHome = (request, response) => response.send("Hello");
const handleListening = () =>
  console.log(`Listening to: https://localhost:${PORT}`);

app.listen(PORT, handleListening);

// middleware logger
app.use(morgan("dev"));

// middleware to secure Express apps
app.use(helmet());

// middleware to parse cookie
app.use(cookieParser());

app.get("/", handleHome);
app.get("/profile", handleProfile);
