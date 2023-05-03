import { NextFunction, Request, Response } from "express";
import { verified } from "../utils/bcrypt.handle";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?:string | JwtPayload
}


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if(!isUser){
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }else{
            req.user = isUser;
            next();
        }
    } catch (e) {
        res.status(400);
        res.send("SESION NO VALIDA / EL USUARIO NO TIENE PERMISOS");
    }
};

export {checkJwt};