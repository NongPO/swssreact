//https://rahmanfadhil.com/express-rest-api/

const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose") // 
const routes = require("./routes") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://puwadonphang:1234@cluster0.hzph7pz.mongodb.net/test", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(cors())
        app.use(express.json()) // 

        app.use("/api", routes) // 

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})

// const app = express()

// app.listen(5000, () => {
// 	console.log("Server has started!")
// })