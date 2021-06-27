import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;
    const userRepository = getCustomRepository(UserRepositories);
    const user = userRepository.findOne(user_id);

    if((await user).admin){
        return next();
    }

    return response.status(401).json({
        error: "This route is authorized for admins only"
    });
}