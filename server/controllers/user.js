const { comparePass } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");
const { User } = require("../models")

class UserController {
    static async register(req, res, next) {
        try {
            let addUser = await User.create(req.body)
            res.status(201).json({message: `username ${addUser.userName} has been created`})
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            if(!email) throw ({name: "Emailrequired"})
            if(!password) throw ({name: "Passwordrequired"})

            const user = await User.findOne({
                where: {email}
            })
            if(!user) throw ({name: "InvalidUser"})
            console.log(user);

            const compareUser = comparePass(password, user.password)
            if(!compareUser) throw ({name: "InvalidPassword"})
            console.log(compareUser);

            const access_token = createToken({id: user.id})

            res.status(200).json({message: `success login`, access_token})

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = UserController

