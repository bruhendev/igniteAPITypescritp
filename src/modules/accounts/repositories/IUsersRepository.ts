import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO"

interface IUsersRepository {
    create(data: ICreateUsersDTO);
    findByEmail(email: string)
    findById(id: string)
}

export { IUsersRepository }