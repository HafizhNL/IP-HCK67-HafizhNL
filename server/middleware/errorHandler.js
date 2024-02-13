const errorHandler = (error, req, res, next) => {
    switch (error.name) {
        case "DataNotFound":
        case "DataNotFoundById":
            res.status(404).json({ message: "Data Empty" })
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            // case  "SequelizeForeignKeyConstraintError":
            res.status(400).json({ message: error.errors[0].message })
            break;

        default:
            res.status(500).json({ message: "Internal server error" })
            break;
    }
}

module.exports = {
    errorHandler
}