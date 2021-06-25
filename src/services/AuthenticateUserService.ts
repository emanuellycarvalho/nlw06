import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { sign } from "jsonwebtoken";

interface IAuthenticateUserService{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateUserService){
        const userRepository = getCustomRepository(UserRepositories);
        
        const user = await userRepository.findOne({
            email
        });

        if(!user){
            throw new Error("Email or passworrd incorrect");
        }

        if (!compare(password, user.password)){
            throw new Error("Email or passworrd incorrect");
        }

        const token = sign({
            email: user.email
        },"39e47fb213c8b04e5ba7a9f92d2d0d2c", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }