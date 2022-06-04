import { Router } from "express"
import PingRoutes from "./PingRoutes"

const router = Router()

router.use("/ping", PingRoutes)

export default router
