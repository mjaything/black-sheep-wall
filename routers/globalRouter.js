import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getSignUp,
  postSignUp,
  getLogIn,
  postLogIn,
  logOut,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp);
globalRouter.get(routes.logIn, getLogIn);
globalRouter.post(routes.logIn, postLogIn);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logOut, logOut);

export default globalRouter;
