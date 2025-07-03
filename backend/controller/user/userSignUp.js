const UserModel = require("../../models/UserModel");
const bcrypt = require('bcryptjs');


const containsHTML = (value) => /<\/?[a-z][\s\S]*>/i.test(value);

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

       
        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");
        if (!name) throw new Error("Please provide name");

      
        if (containsHTML(email) || containsHTML(name)) {
            throw new Error("Invalid characters detected in name or email");
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            throw new Error("User already exists.");
        }

 
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        if (!hashPassword) {
            throw new Error("Something went wrong while encrypting password");
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        };

        const userData = new UserModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!"
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;
