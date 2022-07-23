import express from "express"
import cors from "cors"
import { engine } from "express-handlebars"
import RegisterRouter from "./routers/register.routers.js"
import LoginRouter from "./routers/login.routers.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine(".hbs", engine({ extname: ".hbs" }))
app.set("view engine", ".hbs")
app.set("views", "./views")

app.use(RegisterRouter)
app.use(LoginRouter)

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080")
})