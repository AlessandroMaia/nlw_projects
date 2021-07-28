import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect!")
        }

        const passwordMath = await compare(password, user.password);

        if (!passwordMath) {
            throw new Error("Email/Password incorrect!")
        }

        const token = sign({
            email: user.email
        }, "076c54021facfe5afc3434945422c7af",
        {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }