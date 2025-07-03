const UserModel = require("../models/UserModel")

const uploadProductPermission = async(userId) => {
    const user = await UserModel.findById(userId)

    if(user.role === 'ADMIN'){
        return true
    }

    return false
}


module.exports = uploadProductPermission