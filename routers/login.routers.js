import { Router } from "express";
import { findUser } from "../services/user.service.js";

const LoginRouter = Router();

LoginRouter.get("/login", (req, res) => {
  res.render("login");
});

LoginRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  findUser(username, (user) => {
    if (!user) {
      res.send("User not found!");
    } else if (user.password != password) {
      res.send("Username or passwod is wrong!");
    } else {
      res.send("Successfuly login!");
    }
  });
});

export default LoginRouter;
