import { Request, Response } from "express";
import { CreateTagsService } from "../services/CreateTagsService";


class CreateTagsController {

        async handle(request: Request, response: Response){
            const createTagsService = new CreateTagsService();
            const { name } = request.body;
            
            const tag = await createTagsService.execute(name);
            
            return response.json(tag);
        }
}

export { CreateTagsController }