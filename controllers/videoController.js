import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  const {
    query: { keyword: searchKeyword },
  } = req;
  res.render("search", { pageTitle: "Search", searchKeyword, videos });
};

export const getUploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });

export const postUploadVideo = (req, res) => {
  const {
    body: { videoFile, videoTitle, videoDescription },
  } = req;
  res.redirect(routes.videoInfo(9999));
};

export const video = (req, res) =>
  res.render("video", { pageTitle: "Video", videos });
export const videoInfo = (req, res) =>
  res.render("videoInfo", { pageTitle: "Video Info" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
