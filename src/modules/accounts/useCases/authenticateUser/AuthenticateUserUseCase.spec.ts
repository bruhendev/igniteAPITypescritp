import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUserCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUserCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUserCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("Should be able to authenticate an user", async () => {
        const user: ICreateUsersDTO = {
            id: 1,
            driver_license: "000123",
            name: "User Test",
            email: "user@test.com",
            password: "1234"
        }

        await createUserUseCase.execulte(user);

        const result = await authenticateUserUseCase.execute({email: "user@test.com", password: "1234"});

        expect(result).toHaveProperty("token");
    })
})