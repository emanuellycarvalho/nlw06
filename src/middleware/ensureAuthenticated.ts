import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({message: "Missing token"});
    }

    const [, token] = authToken.split(" "); //pra tirar o bearer da frente
    
    try{
        const { sub }  = verify(token, "39e47fb213c8b04e5ba7a9f92d2d0d2c") as IPayLoad;

        request.user_id = sub;
        
        return next();
    }catch(err){
        return response.status(401).json();
    }


}