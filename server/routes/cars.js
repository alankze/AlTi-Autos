const express = require("express");
const router = express.Router();
const {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
} = require('../controllers/cars');

router.get("/",getAllCars);
router.get("/:id",getCarById);
router.post("/",createCar);
router.put("/:id",updateCar);
router.delete("/:id",deleteCar);

module.exports = router;