const express = require("express")
const Product_CategoryController = require("../controllers/Product_Category")
const router = express.Router()

router.post("/", Product_CategoryController.create)
router.get("/", Product_CategoryController.visual)


module.exports = router