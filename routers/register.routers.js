import { Router } from "express";

const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
    console.log(req.body)
    res.send("Register")
})

export default router;
