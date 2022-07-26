import { Router } from "express";

const router = Router()

router.get("/menu", (req, res) => {
    res.render("menu", { layout: "home" })
})

export default router