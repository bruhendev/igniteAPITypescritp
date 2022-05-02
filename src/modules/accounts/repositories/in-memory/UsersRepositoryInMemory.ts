import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


export class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({ driver_license, email, name, password }: ICreateUsersDTO) {
        const user = new User();

        Object.assign(user, { driver_license, email, name, password });

        this.users.push(user)
    }

    async findByEmail(email: string) {
        return this.users.find(user => user.email === email)
    }

    async findById(id: string) {
        return this.users.find(user => user.id === parseInt(id))
    }

}