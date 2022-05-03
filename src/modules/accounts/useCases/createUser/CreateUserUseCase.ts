import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execulte({ name, password, email, driver_license }: ICreateUsersDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists) {
            throw new AppError("User already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({ name, password: passwordHash, email, driver_license });
    }
}

export { CreateUserUseCase }