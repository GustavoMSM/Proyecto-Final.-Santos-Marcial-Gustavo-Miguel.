import { Router } from "express";
const router = Router()
import * as userCtrl from "../controllers/user.controller"
import {authjwt, verifySignup} from "../middleware"

router.post("/", [
    authjwt.verifyToken,
    authjwt.isAdmin,
    authjwt.isModerator,
    verifySignup.checkRolesExisted
],userCtrl.createUser);

export default router;