import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserCase } from "./AuthenticateUseCase";


class AuthenticateUseController {

    async handle(request: Request, response: Response) {
        const { password, email } = request.body;

        const authenticateUserCase = container.resolve(AuthenticateUserCase);

        const token = await authenticateUserCase.execute({password, email});

        return response.json(token);
    }
}

export { AuthenticateUseController }