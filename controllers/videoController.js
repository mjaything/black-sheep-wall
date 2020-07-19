export const home = (req, res) => res.render("Home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { keyword: searchKeyword },
  } = req;
  res.render("Search", { pageTitle: "Search", searchKeyword });
};
export const video = (req, res) => res.render("Video", { pageTitle: "Video" });
export const uploadVideo = (req, res) =>
  res.render("Upload Video", { pageTitle: "Upload Video" });
export const videoInfo = (req, res) =>
  res.render("Video Info", { pageTitle: "Video Info" });
export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
