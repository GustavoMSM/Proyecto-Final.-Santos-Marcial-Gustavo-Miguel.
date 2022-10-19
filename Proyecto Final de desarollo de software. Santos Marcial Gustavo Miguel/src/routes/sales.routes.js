import { Router } from "express";
const router = Router()

import * as salesCtrl from '../controllers/sales.controller.js';
import { authjwt } from "../middleware/index.js";

router.post("/", [authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin], salesCtrl.createSales)

router.get('/',salesCtrl.createSales)

router.get('/',salesCtrl.getSales)

router.get('/:salesId',salesCtrl.getSalesById)


export default router;