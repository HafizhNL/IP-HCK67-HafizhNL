const ControllerProduct = require("../controllers/product")

const router = require("express").Router()

router.get("/electronic", ControllerProduct.showProduct)
router.post("/electronic", ControllerProduct.addProduct)
router.get("/electronic/:id", ControllerProduct.findProduct)
router.delete("/electronic/:id", ControllerProduct.deleteProduct)
router.put("/electronic/:id", ControllerProduct.editProduct)

module.exports = router