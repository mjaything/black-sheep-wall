import express from "express";
import routes from "../routes";
import {
  user,
  userInfo,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userInfo, userInfo);

export default userRouter;
