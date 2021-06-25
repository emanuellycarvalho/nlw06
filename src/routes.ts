import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();
const createUserController = new CreateUserController;
const createTagsController = new CreateTagsController;
const authenticateUserContrller = new AuthenticateUserController;
const createComplimentsController = new CreateComplimentController;

router.post("/users", (createUserController.handle));
router.post("/tags", ensureAdmin, (createTagsController.handle));
router.post("/login", authenticateUserContrller.handle);
router.post("/compliments", createComplimentsController.handle);

export { router };