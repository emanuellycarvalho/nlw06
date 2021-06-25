import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean
}

class CreateUserService{

    async execute({ name, email, admin, password } : IUserRequest){
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

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email, 
            admin,
            password: passwordHash
        });

        await userRepository.save(user);
    }
}

export { CreateUserService }