import express from "express";
import routes from "../routes";
import {
  video,
  getUploadVideo,
  postUploadVideo,
  videoInfo,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.video, video);
videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, postUploadVideo);
videoRouter.get(routes.videoInfo(), videoInfo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
