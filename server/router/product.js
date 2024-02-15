const ControllerProduct = require("../controllers/product")
const authentication = require("../middleware/authentication")


const router = require("express").Router()

router.use(authentication)

router.get("/products", authentication, ControllerProduct.showProduct)
router.post("/products", authentication, ControllerProduct.addProduct)
router.get("/products/:id", authentication, ControllerProduct.findProduct)
router.delete("/products/:id", authentication, ControllerProduct.deleteProduct)
router.put("/products/:id", authentication, ControllerProduct.editProduct)

module.exports = router