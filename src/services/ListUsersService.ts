import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"


class ListUsersService{

    async execute(){
        const userRepository = getCustomRepository(UserRepositories);
        const users = await userRepository.find();

        return users;
    }
    
}

export { ListUsersService }