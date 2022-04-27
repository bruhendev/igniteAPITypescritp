import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execulte({ name, password, email, driver_license }: ICreateUsersDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({ name, password: passwordHash, email, driver_license });
    }
}

export { CreateUserUseCase }