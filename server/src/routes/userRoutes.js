import * as UserControllers from "../controllers/usersControllers.js"
import express from "express"

const router = express.Router()

router.post("/register", UserControllers.register)
router.post("/login", UserControllers.login)

export default router

