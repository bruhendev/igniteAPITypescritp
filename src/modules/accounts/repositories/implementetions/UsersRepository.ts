import { AppDataSource } from "../../../../database/data-source";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }  

    async create({ name, password, email, driver_license }: ICreateUsersDTO) {
        const user = await this.repository.create({ name, password, email, driver_license });

        await this.repository.save(user);
    }

    async findByEmail(email: string) {
        const user = await this.repository.findOne({
            where: {
                email
            }
        });
        return user;
    }  

}

export { UsersRepository }