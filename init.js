import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

// assign 4000 in case PORT constant from .env is not found
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`${PORT}`);

app.listen(PORT, handleListening);
