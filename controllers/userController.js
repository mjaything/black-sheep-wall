export const user = (req, res) => res.render("user", { pageTitle: "User" });
export const userInfo = (req, res) =>
  res.render("userInfo", { pageTitle: "User Info" });
export const signUp = (req, res) =>
  res.render("signUp", { pageTitle: "Sign Up" });
export const logIn = (req, res) => res.render("logIn", { pageTitle: "Log In" });
export const logOut = (req, res) =>
  res.render("logOut", { pageTitle: "Log Out" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
