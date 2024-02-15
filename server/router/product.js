const ControllerProduct = require("../controllers/product")
const authentication = require("../middleware/authentication")
const multer = require("multer")
const upload = multer({
    storage: multer.memoryStorage()
})

const router = require("express").Router()

router.use(authentication)

router.get("/products", authentication, ControllerProduct.showProduct)
router.post("/products", authentication, ControllerProduct.addProduct)
router.get("/products/:id", authentication, ControllerProduct.findProduct)
router.delete("/products/:id", authentication, ControllerProduct.deleteProduct)
router.put("/products/:id", authentication, ControllerProduct.editProduct)
router.patch("/products/:id/cover-url", authentication, upload.single("image"), ControllerProduct.coverUrlProduct)

module.exports = router