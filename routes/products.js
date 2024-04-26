const express = require("express")
const ProductsController = require("../controllers/ProductsController")
const router = express.Router()

router.post("/", ProductsController.create)
router.get("/", ProductsController.visual)
router.put("/", ProductsController.update)
router.get("/productsWithCategories", ProductsController.visualProductsWithCategories)
router.get("/id/:id", ProductsController.visualForId)
router.get("/desc", ProductsController.visualDesc)
router.get("/name/:name", ProductsController.visualForName)
router.delete("/id/:id", ProductsController.deleteForId)

module.exports = router