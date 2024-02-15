const { verifyToken } = require("../helper/jwt")
const { User } = require("../models")

async function authentication(req, res, next) {
    try {
        const bearerToken = req.headers.authorization
        if(!bearerToken) throw ({name: "Unauthorized"})

        const token = bearerToken.split(" ")[1]

        const decodedToken = verifyToken(token)

        const user = await User.findByPk(decodedToken.id)
        if(!user) throw ({name: "Unauthorized"})

        req.user = user
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = authentication 