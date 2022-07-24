import { Router } from "express";
import { allUsers } from "../services/user.service.js";

const router = Router()

router.get('/users', (req, res) => {
    
    if (req.cookies.token) {
        
        allUsers((users) => {
            res.render('users', { users })
        })
    }
    else {
        res.redirect('/login')
    }
})

export default router