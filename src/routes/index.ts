import { Router } from "express";
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './spefications.routes';
import { usersRouters } from "./Users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouters)

export { router };