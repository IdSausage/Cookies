const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	const token = req.cookies.user;

    var decoded = jwt.verify(token, "ZJGX1Qri6BGJWj3t");
    console.log(decoded);

    if(decoded)
    {
        res.json({
            success: true,
            message: "User is logged in",
        });
    }
    else
    {
        res.json({
            success: false,
            message: "User is not logged in",
        });
    }
}