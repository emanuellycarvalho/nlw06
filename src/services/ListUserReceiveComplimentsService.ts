import { getCustomRepository } from "typeorm"
import { ComlimentsRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiveCompliments{

    async excecute(user_id: string){
        const complimetsRepository = getCustomRepository(ComlimentsRepositories);
        const compliments = await complimetsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });

        return compliments;
    }

}

export { ListUserReceiveCompliments }