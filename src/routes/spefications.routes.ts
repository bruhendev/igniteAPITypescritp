import { Router } from "express";
import { createSpacificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpacificationController.handle(request, response)
})

export { specificationsRoutes }