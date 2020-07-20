import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  const {
    query: { keyword: searchKeyword },
  } = req;
  res.render("search", { pageTitle: "Search", searchKeyword, videos });
};
export const video = (req, res) =>
  res.render("video", { pageTitle: "Video", videos });
export const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });
export const videoInfo = (req, res) =>
  res.render("videoInfo", { pageTitle: "Video Info" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
