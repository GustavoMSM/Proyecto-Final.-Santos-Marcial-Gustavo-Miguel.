import { Router } from "express";
const router = Router()
import * as userCtrl from "../controllers/user.controller.js"
import {authjwt, verifySignup} from "../middleware/index.js"

router.post("/", [
    authjwt.verifyToken,
    authjwt.isAdmin,
    authjwt.isModerator,
    verifySignup.checkRolesExisted
],userCtrl.createUser);

export default router;