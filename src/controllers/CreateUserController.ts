import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{

    async handle(request: Request, response: Response){
        const createUserService = new CreateUserService();
        const { name, email, admin, password } = request.body;
        
        const user = await createUserService.execute({name, email, admin, password});
        
        return response.json;
    }

}

export { CreateUserController }