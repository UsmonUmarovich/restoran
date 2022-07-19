import { Router } from "express";

const registerRouters = Router();

registerRouters.get("/register", (req, res) => {
  res.render("register");
});

export default registerRouters;
