import { Router } from "express";
const router = Router()

import * as branchCtrl from '../controllers/branch.controller';
import { authjwt } from "../middleware";

router.post("/", [authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin], branchCtrl.createBranch)

router.get('/',branchCtrl.createBranch)

router.get('/',branchCtrl.getBranch)

router.get('/:productId',branchCtrl.getBranchById)

router.get('/:productId',[authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin],branchCtrl.updateBranchById)

export default router;