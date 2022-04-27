import { inject, injectable } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execulte({ name, username, password, email, driver_license }: ICreateUsersDTO) {
        await this.usersRepository.create({ name, username, password, email, driver_license });
    }
}

export { CreateUserUseCase }