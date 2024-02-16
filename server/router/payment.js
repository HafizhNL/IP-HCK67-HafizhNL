
const ControllerPayment = require("../controllers/payment")
const authentication = require("../middleware/authentication")

const router = require("express").Router()

router.get("/payment/midtrans/initiate", authentication, ControllerPayment.buy)

module.exports = router