import { getCustomRepository } from "typeorm"
import { ComlimentsRepositories } from "../repositories/ComplimentsRepositories";



class ListUserSendCompliments{

    async excecute(user_id: string){
        const complimetsRepository = getCustomRepository(ComlimentsRepositories);
        const compliments = await complimetsRepository.find({
            where: {
                user_sender: user_id
            }
        });

        return compliments;
    }

}

export { ListUserSendCompliments }