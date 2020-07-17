import express from "express";

const userRouter = express.Router();
const handleUserIndex = (req, response) => res.send("user index");
const handleUserEdit = (req, response) => res.send("user edit");
const handleUserPassword = (req, res) => res.send("user password");

userRouter.get("/", handleUserIndex);
userRouter.get("/", handleUserEdit);
userRouter.get("/", handleUserPassword);
