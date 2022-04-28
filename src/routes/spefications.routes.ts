import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpacificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpacificationController = new CreateSpacificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpacificationController.handle)

export { specificationsRoutes }