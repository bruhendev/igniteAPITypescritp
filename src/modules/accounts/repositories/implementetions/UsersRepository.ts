import { AppDataSource } from "../../../../database/data-source";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }

    

    async create({ name, username, password, email, driver_license }: ICreateUsersDTO) {
        const user = await this.repository.create({ name, username, password, email, driver_license });

        await this.repository.save(user);
    }

}

export { UsersRepository }