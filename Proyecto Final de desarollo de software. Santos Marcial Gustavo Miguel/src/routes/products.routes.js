import { Router } from "express";
const router = Router()

import * as productCtrl from '../controllers/products.controller.js';
import { authjwt } from "../middleware/index.js";

router.post("/", [authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin], productCtrl.createProduct)

router.get('/',productCtrl.createProduct)

router.get('/',productCtrl.getProducts)

router.get('/:productId',productCtrl.getProductById)

router.get('/:productId',[authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin],productCtrl.updateProductById)

router.get('/:productId',[authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin],productCtrl.deleteProductById)

export default router;