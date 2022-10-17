import { Router } from "express";
const router = Router()

import * as paymentCtrl from '../controllers/payment.controller';
import { authjwt } from "../middleware";

router.post("/", [authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin], paymentCtrl.createPayment)

router.get('/',paymentCtrl.createPayment)

router.get('/',paymentCtrl.getProducts)

router.get('/:productId',paymentCtrl.getPaymentById)

router.get('/:productId',[authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin],paymentCtrl.updatePaymenttById)

router.get('/:productId',[authjwt.verifyToken, authjwt.isModerator, authjwt.isAdmin],paymentCtrl.deletePaymentById)

export default router;