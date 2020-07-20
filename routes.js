// Global
const HOME = "/";
const SIGNUP = "/sign-up";
const LOGIN = "/log-in";
const LOGOUT = "/log-out";
const SEARCH = "/search";

// User
const USER = "/user";
const USER_INFO = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video
const VIDEO = "/video";
const UPLOAD_VIDEO = "/upload";
const VIDEO_INFO = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Object
const routes = {
  home: HOME,
  signUp: SIGNUP,
  logIn: LOGIN,
  logOut: LOGOUT,
  search: SEARCH,
  user: USER,
  userInfo: USER_INFO,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  videoInfo: VIDEO_INFO,
  uploadVideo: UPLOAD_VIDEO,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
