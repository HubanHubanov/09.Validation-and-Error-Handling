const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const {SECRET} = require("../config/config");


//TODO: Check if user exists
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    // Get user from db
    const user = await User.findOne({ email });

    // Check if user exists
    if(!user) {
        throw new Error("Can not find email or password");
    }
    // Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error("Can not find email or password");
    }
    // Generate gwt token
    const payload = {
        _id: user._id,
        email: user.email
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: "2h"});

    // Return token
    return token
}