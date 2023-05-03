const mongoose = require("mongoose")



const registerSchema = mongoose.Schema({
	firstname:  String,
	lastname: String,
	Contract: String,
	email: String,
	password: String,
	requiredMarkValue: String,
	birthdate: String
})


module.exports = mongoose.model("Register", registerSchema)
