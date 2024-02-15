const errorHandler = (error, req, res, next) => {
    switch (error.name) {
        case "DataNotFound":
        case "DataNotFoundById":
            res.status(404).json({ message: "Data Empty" })
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            res.status(400).json({ message: error.errors[0].message })
            break;
        case "Emailrequired":
        case "Passwordrequired":
        case "Usernamerequired":
            res.status(400).json({ message: "Form required" })
            break;
        case "InvalidUser":
        case "InvalidPassword":
            res.status(401).json({ message: "Invalid User/Password" })
            break;
        case "Unauthorized":
            res.status(401).json({ message: "Unauthorized" })
            break;
        case "FileRequired":
            res.status(400).json({message: "FileRequired"})

        default:
            res.status(500).json({ message: "Internal server error" })
            break;
    }
}

module.exports = {
    errorHandler
}