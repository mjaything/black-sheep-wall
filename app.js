import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

// middleware logger
app.use(morgan("dev"));

// middleware to secure Express apps
app.use(helmet());

// middleware to parse cookie
app.use(cookieParser());

// middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

export default app;
