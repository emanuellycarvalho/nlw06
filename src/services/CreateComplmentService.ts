import { getCustomRepository } from "typeorm"
import { ComlimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepositories";


interface ICreateComplimentService{
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentService{

    async execute({ user_sender, user_receiver, tag_id, message}: ICreateComplimentService){
        const complimentsRepository = getCustomRepository(ComlimentsRepositories);
        const usersRepository = getCustomRepository(UserRepositories);

        if(user_sender === user_receiver){
            throw new Error("You can't compliment yourself.");
        }

        const userReceiverExists = await usersRepository.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("User receiver doesn't exist.");
        }

        const compliment = complimentsRepository.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        });

        await complimentsRepository.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService }