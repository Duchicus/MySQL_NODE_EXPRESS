const express = require("express")
const CategorysController = require("../controllers/CategorysController")
const router = express.Router()

router.post("/", CategorysController.create)
router.get("/", CategorysController.visual)
router.put("/", CategorysController.update)
router.get("/id/:id", CategorysController.visualForId)


module.exports = router