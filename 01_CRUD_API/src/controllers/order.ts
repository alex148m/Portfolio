import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo lo ven los usuarios con la sesion activa / JWT",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ORDERS')
    }

}

export { getOrders }