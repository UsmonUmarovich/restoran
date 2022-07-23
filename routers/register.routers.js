import { Router } from "express";
import { createUser } from "../services/user.service.js";

const RegisterRouter = Router();

RegisterRouter.get("/register", (req, res) => {
  res.render("register");
});

RegisterRouter.post("/register", (req, res) => {
    const {name, surname, username, password} = req.body
    createUser(name, surname, username, password)
    res.redirect("/login")
})

export default RegisterRouter;
