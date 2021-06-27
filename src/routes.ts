import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";

const router = Router();
const createUserController = new CreateUserController;
const createTagsController = new CreateTagsController;
const authenticateUserContrller = new AuthenticateUserController;
const createComplimentsController = new CreateComplimentController;
const listUserSendComplimentsController = new ListUserSendComplimentsController;
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController;

router.post("/users", (createUserController.handle));
router.post("/tags", ensureAuthenticated, ensureAdmin, (createTagsController.handle));
router.post("/login", authenticateUserContrller.handle);
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

export { router };