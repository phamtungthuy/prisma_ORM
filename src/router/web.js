import express from "express";
import homeController from '../controllers/homeController';

let router = express.Router();

router.get('/', homeController.getHomePage);
router.get('/api/get-customers-with-orders', homeController.getCustomersWithOrders);
module.exports = router;