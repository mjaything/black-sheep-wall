import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// open a connection to black-sheep-wall database on MongoDB instance
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(`Error connecting to DB: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
