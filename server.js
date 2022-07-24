import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import cookieParser from 'cookie-parser'

import registerRoutes from './routes/register.routes.js'
import loginRoutes from './routes/login.routes.js'
import usersRoutes from './routes/users.routes.js'

const app = express()

app.use(cookieParser('bu-yerda-maxfiy-kalit-bolishi-kerak'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use((req, res, next) => {
    console.log(req.method + ' \'' + req.originalUrl + '\' body: ' + req.body);
    next()
})

app.use(registerRoutes)
app.use(loginRoutes)
app.use(usersRoutes)

app.listen(8080, console.log('Server started on http://localhost:8080'))