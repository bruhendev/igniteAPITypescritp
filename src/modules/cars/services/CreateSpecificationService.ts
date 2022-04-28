import { AppError } from "../../../errors/AppError";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({name, description}: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exits!")
        }

        this.specificationRepository.create({
            name, description
        });
    }
}

export { CreateSpecificationService }