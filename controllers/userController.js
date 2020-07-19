export const user = (req, res) => res.render("User", { pageTitle: "User" });
export const userInfo = (req, res) =>
  res.render("User Info", { pageTitle: "User Info" });
export const join = (req, res) => res.render("Join", { pageTitle: "Join" });
export const login = (req, res) => res.render("Login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("Logout", { pageTitle: "Logout" });
export const editProfile = (req, res) =>
  res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("Change Password", { pageTitle: "Change Password" });
