import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO"



interface IUsersRepository {
    create(data: ICreateUsersDTO)
}

export { IUsersRepository }