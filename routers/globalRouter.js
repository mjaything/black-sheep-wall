import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { signUp, logIn, logOut } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.signUp, signUp);
globalRouter.get(routes.logIn, logIn);
globalRouter.get(routes.logOut, logOut);

export default globalRouter;
