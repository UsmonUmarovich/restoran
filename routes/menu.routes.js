import { Router } from "express";
import { allFoods } from "../services/menu.service.js";

const router = Router();

router.get("/menu", (req, res) => {
  allFoods((foods) => {
    res.render("menu", { layout: "home", foods });
  });
});

export default router;
