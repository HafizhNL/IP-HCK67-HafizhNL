const { Product, Category } = require("../models")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dnr9auk34",
    api_key: "899182411313244",
    api_secret: "VAgaq5okajESu8vjCwk1CAcfrK4"
})

class ControllerProduct {
    static async showProduct(req, res, next) {
        try {
            let showProduct = await Product.findAll({
                include: {
                    model: Category
                }
            })
            res.status(200).json(showProduct)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async findProduct(req, res, next) {
        try {
            let findProduct = await Product.findByPk(req.params.id)
            if(!findProduct) throw ({name: "DataNotFound"})
            res.status(200).json(findProduct)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async addProduct(req, res, next) {
        try {
            let addProduct = await Product.create(req.body)
            res.status(201).json(addProduct)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            let findProduct = await Product.findByPk(req.params.id)
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            console.log(findProduct);       
            if(!findProduct) throw ({name: "DataNotFoundById"})
            res.status(200).json({message: `${findProduct.name} delete success`})

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async editProduct(req, res, next) {
        try {
            let findIdProduct = await Product.findByPk(req.params.id)
            if(!findIdProduct) throw ({name: "DataNotFoundById"})
            await Product.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(201).json({message: `${findIdProduct.name} has been changed`})
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async coverUrlProduct(req, res, next) {
        try {
            let findIdProduct = await Product.findByPk(req.params.id)
            if(!findIdProduct) throw ({name: "DataNotFoundById"})

            if(!req.file) throw ({name: "FileRequired"})

            const base64image = req.file.buffer.toString("base64")
            const base64URL = `data:${req.file.mimetype};base64,${base64image}`

            const img = await cloudinary.uploader.upload(base64URL, {
                public_id: req.file.originalname.split(".")[0]
            })

            await findIdProduct.update({ imgUrl: img.secure_url })

            res.json(findIdProduct)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = ControllerProduct