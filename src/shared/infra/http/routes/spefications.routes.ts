import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpacificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRoutes = Router();

const createSpacificationController = new CreateSpacificationController()


specificationsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpacificationController.handle)

export { specificationsRoutes }