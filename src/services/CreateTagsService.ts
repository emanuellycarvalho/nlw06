import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagsService{

    async execute(name: string){
        const tagsRepository = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Plase, insert a valid name");
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name
        });

        if(tagAlreadyExists){
            throw new Error("There's another tag using that same name");
        }

        const tag = tagsRepository.create({
            name
        });

        await tagsRepository.save(tag);

        return tag;

    }

}

export { CreateTagsService }