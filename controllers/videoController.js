export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { keyword: searchKeyword },
  } = req;
  res.render("search", { pageTitle: "Search", searchKeyword });
};
export const video = (req, res) => res.render("video", { pageTitle: "Video" });
export const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });
export const videoInfo = (req, res) =>
  res.render("videoInfo", { pageTitle: "Video Info" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
