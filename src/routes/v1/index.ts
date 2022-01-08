import express from "express"
import userRoutes from "../v1/users/User"

const router: express.Router = express.Router()

router.use('/users', userRoutes)

export default router
