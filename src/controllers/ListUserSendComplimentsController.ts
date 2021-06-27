import { Response, Request } from "express";
import { ListUserSendCompliments } from "../services/ListUserSendComplimentsService";


class ListUserSendComplimentsController{


    async handle(request: Request, response: Response){
        const { user_id } = request;

        const liserUserSendComplimentsService = new ListUserSendCompliments();
        const compliments = liserUserSendComplimentsService.excecute(user_id);
    
        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController }