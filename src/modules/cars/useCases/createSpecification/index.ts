import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpacificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpacificationController = new CreateSpacificationController(createSpecificationUseCase)

export { createSpacificationController }