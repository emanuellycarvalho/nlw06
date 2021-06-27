import { Response, Request } from "express";
import { ListUserReceiveCompliments } from "../services/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentsController{


    async handle(request: Request, response: Response){
        const { user_id } = request;

        const liserUserReceiveComplimentsService = new ListUserReceiveCompliments();
        const compliments = liserUserReceiveComplimentsService.excecute(user_id);
    
        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController }