import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagsController{

        async handle(request: Request, response: Response){
            const listTagService = new ListTagService;

            // let tags = await listTagService.execute();
            // tags = tags.map(tag => (
            //     {...tag, nameCustom: `#${tag.name}`}
            // ));

            const tags = await listTagService.execute();

            return response.json(tags);
        }

}

export { ListTagsController }