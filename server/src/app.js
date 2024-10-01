import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { log } from "./middlewares/log.js"
import { initDB } from "./utils/db.js"
import "dotenv/config"
import UserRoutes from "./routes/userRoutes.js"


const app = express()
const PORT = process.env.PORT || 3310


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use(log)

app.use("/api/auth", UserRoutes) 

initDB()

app.listen(PORT , () => {
    console.info(`Server is running on port ${PORT}`)
})