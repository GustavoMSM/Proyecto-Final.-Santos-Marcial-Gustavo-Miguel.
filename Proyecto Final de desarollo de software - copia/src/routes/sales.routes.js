import { Router } from "express";
const router = Router()

import * as salesCtrl from '../controllers/sales.controller';
import { authjwt } from "../middleware";

router.post("/", [authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin], salesCtrl.createSales)

router.get('/',salesCtrl.createSales)

router.get('/',salesCtrl.getSales)

router.get('/:salesId',salesCtrl.getSalesById)


export default router;