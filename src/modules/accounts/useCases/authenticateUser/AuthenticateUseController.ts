import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUserCase } from "./AuthenticateUserUseCase";


class AuthenticateUseController {

    async handle(request: Request, response: Response) {
        const { password, email } = request.body;

        const authenticateUserCase = container.resolve(AuthenticateUserUserCase);

        const token = await authenticateUserCase.execute({password, email});

        return response.json(token);
    }
}

export { AuthenticateUseController }