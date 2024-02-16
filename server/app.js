require("dotenv").config()

const express = require('express')
const app = express()
const port = 3000
const routerLogin = require("./router/login")
const routerProduct = require("./router/product")
const routerPayment = require("./router/payment")
const { errorHandler } = require("./middleware/errorHandler")
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(routerLogin)
app.use(routerProduct)
app.use(routerPayment)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})