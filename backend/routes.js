const express = require("express")
const Post = require("./models/Post") // 
const Register = require("./models/Register")
const router = express.Router()

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find()
    console.log(req.body)
	res.send(posts)
})

router.post("/posts", async (req, res) => {
	const posts = await Post.find()
    console.log(req.body)
	res.send(posts)
})


router.post("/userlogin",async (req, res) => {

	let query={	email: req.body.username,password: req.body.password}

	const posts = await Register.find(query)
    console.log(query)
	console.log(posts)
	res.send(posts)
})

router.post("/register",async (req, res) => {
	const register = new Register({
		firstname:  req.body.firstname,
	lastname: req.body.lastname,
	Contract: req.body.Contract,
	email: req.body.email,
	password: req.body.password,
	requiredMarkValue: req.body.requiredMarkValue,
	birthdate: req.body.birthdate,
	
	})
	await register.save()
	res.send(register)
    console.log(req.body)
	
})

module.exports = router