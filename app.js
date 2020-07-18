import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

// a function representing express module
const app = express();

// assigns setting view engine to pug
app.set("view engine", "pug");

// middleware logger
app.use(morgan("dev"));

// middleware to secure Express apps
app.use(helmet());

// middleware to parse cookie
app.use(cookieParser());

// middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);

export default app;
