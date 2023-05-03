const mongoose = require("mongoose")

const schema = mongoose.Schema({
	firstname:  String,
	lastname: String,
	Contract: String,
	email: String,
	password: String,
	requiredMarkValue: String,
	birthdate: String
})



module.exports = mongoose.model("Post", schema)

