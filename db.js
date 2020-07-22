import mongoose from "mongoose";

// open a connection to black-sheep-wall database on MongoDB instance
mongoose.connect("mongodb://localhost:27017/black-sheep-wall", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(`Error connecting to DB: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
