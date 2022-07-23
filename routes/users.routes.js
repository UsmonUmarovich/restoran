import { Router } from "express";
import { allUsers } from "../services/user.service.js";

const router = Router()

router.get('/users', (req, res) => {
    
    allUsers((users) => {
        res.render('users', { users })
    })
})

export default router