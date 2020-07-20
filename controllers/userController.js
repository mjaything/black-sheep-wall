import routes from "../routes";

export const getSignUp = (req, res) => {
  res.render("signUp", { pageTitle: "Sign Up" });
};

export const postSignUp = (req, res) => {
  const {
    body: { name, email, password, confirmPassword },
  } = req;
  if (password !== confirmPassword) {
    res.status(400);
    res.render("signUp", { pageTitle: "Sign Up" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogIn = (req, res) =>
  res.render("logIn", { pageTitle: "Log In" });

export const postLogIn = (req, res) => res.redirect(routes.home);

export const logOut = (req, res) => {
  res.redirect(routes.home);
};

export const user = (req, res) => res.render("user", { pageTitle: "User" });
export const userInfo = (req, res) =>
  res.render("userInfo", { pageTitle: "User Info" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
