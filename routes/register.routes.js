import { Router } from "express";
import { createUser, findUser } from "../services/user.service.js";

const router = Router()

router.get('/register', (req, res) => {
    const { error } = req.query

    res.render('register', { error })
})

router.post('/register', (req, res) => {
    const { name, surname, username, password } = req.body

    findUser(username, (user) => {
        if (user) {
            res.redirect('/register?error=UserAlreadyExists')
        }
        else {
            createUser(name, surname, username, password)
            res.redirect('/login')
        }
    })
})

export default router