import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "@modules/accounts/entities/User";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { AppDataSource } from "@shared/http/database/data-source";


class UsersRepository implements IUsersRepository {

    private repository;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }  
    

    async create({ name, password, email, driver_license, avatar, id }: ICreateUsersDTO) {
        const user = await this.repository.create({ name, password, email, driver_license, avatar, id });

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
    
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            where: {
                id: parseInt(id)
            }
        })

        return user
    }

}

export { UsersRepository }