import { Router } from "express";
import { allFoods, createFood } from "../services/menu.service.js";

const router = Router();

router.get("/menu", (req, res) => {
  allFoods((foods) => {
    res.render("menu", { layout: "home", foods });
  });
});

router.post("/menu", (req, res) => {
  const { name, price, ingredients, image } = req.body;
  createFood(name, price, ingredients, image);
  res.redirect("/menu")
});

router.get("/menu/add", (req, res) => {
  res.render("add-menu")
})

export default router;
