import express from "express";

export const userRouter = express.Router();

const handleUserIndex = (req, res) => res.send("user index");
const handleUserEdit = (req, res) => res.send("user edit");
const handleUserPassword = (req, res) => res.send("user password");

userRouter.get("/", handleUserIndex);
userRouter.get("/edit", handleUserEdit);
userRouter.get("/password", handleUserPassword);
