import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplmentService";


class CreateComplimentController{

        async handle(request: Request, response: Response){
            const { } = request.body;

            const createComplimentService = new CreateComplimentService();

            
        }
}

export { CreateComplimentController }