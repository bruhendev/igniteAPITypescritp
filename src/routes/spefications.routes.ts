import { Router } from "express";
import { CreateSpacificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpacificationController = new CreateSpacificationController()

specificationsRoutes.post("/", createSpacificationController.handle)

export { specificationsRoutes }