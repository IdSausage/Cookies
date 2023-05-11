const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

module.exports = (req, res) => {

	const token = req.cookies.user;
	let decode = jwt.verify(token , "ZJGX1Qri6BGJWj3t");

	const sql = mysql.format("SELECT items.* FROM items INNER JOIN users ON items.owner_id = users.id  WHERE users.id = ? " , [decode.userId]);

	connection.query(sql, (err, rows) => {
		// Check if cannot find the data in the database then return the error
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			// Return data to the client if success
			return res.json({
				success: true,
				data: rows,
				error: null,
			});
		}
	});
};
