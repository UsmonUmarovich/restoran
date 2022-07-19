import express from "express"
import cors from "cors"
import { engine } from "express-handlebars"
import registerRouters from "./routers/register.routers.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine(".hbs", engine({ extname: ".hbs" }))
app.set("view engine", ".hbs")
app.set("views", "./views")

app.use(registerRouters)

app.listen(8080, (req, res) => {
    console.log("Server is running on http://localhost:8080")
})