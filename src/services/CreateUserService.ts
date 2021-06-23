import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService{

    async execute({ name, email, admin } : IUserRequest){
        const userRepository = getCustomRepository(UserRepositories);

        if (!email){
            throw new Error("Please, insert a valid e-mail");
        }
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("Another user is already using that e-mail");
        }

        const user = userRepository.create({
            name,
            email, 
            admin
        });

        await userRepository.save(user);
    }
}

export { CreateUserService }