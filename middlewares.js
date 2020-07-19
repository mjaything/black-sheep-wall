import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.webSiteName = "Black Sheep Wall";
  res.locals.routes = routes;
  next();
};
