import { Router } from "express"
import { getOrders } from "../controllers/order"
import { checkJwt } from "../middleware/session"

/*
** A esta ruta solo pueden acceder usuarios con la sesion activa
** Que tenga un JWT valido
*/

const router = Router()

router.get("/",checkJwt, getOrders)

export {router}