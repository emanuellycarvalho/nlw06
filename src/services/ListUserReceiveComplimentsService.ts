import { getCustomRepository } from "typeorm"
import { ComlimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories"



class ListUserReceiveCompliments{

    async excecute(user_id: string){
        const complimetsRepository = getCustomRepository(ComlimentsRepositories);
        const compliments = await complimetsRepository.find({
            where: {
                user_receiver: user_id
            }
        });

        return compliments;
    }

}

export { ListUserReceiveCompliments }