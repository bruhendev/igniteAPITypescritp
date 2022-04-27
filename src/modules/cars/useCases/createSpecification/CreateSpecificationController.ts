import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpacificationController {

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

        await createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpacificationController }