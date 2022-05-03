import { AppError } from "@shared/errors/AppError"; 
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO"; 
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"; 
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase"; 
import { AuthenticateUserUserCase } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase"

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

        const result = await authenticateUserUseCase.execute({ email: "user@test.com", password: "1234" });

        expect(result).toHaveProperty("token");
    })

    it("Should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({ email: "false@test.com", password: "1234" })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("should not be able to authenticate with incorret password", () => {
        expect(async () => {
            const user2: ICreateUsersDTO = {
                id: 2,
                driver_license: "000123",
                name: "User Error Test",
                email: "usertest@test.com",
                password: "1234"
            }

            await createUserUseCase.execulte(user2);

            await authenticateUserUseCase.execute({ email: user2.email, password: "incorretPassword" })

        }).rejects.toBeInstanceOf(AppError);
    })
})