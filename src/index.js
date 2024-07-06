const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors')
const mongoose = require("mongoose");
const product = require('../schemas/product')
const User = require('../schemas/user')
const order = require('../schemas/order');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(bodyParser.json())

const database = "mongodb+srv://achauque14:2526Chauque!@alanchauquedev.jzizany.mongodb.net/";
mongoose.connect(database)

var db= mongoose.connection;
db.on('error',() => console.log('error in connecting database'));
db.once('open', () =>console.log('connected to Database'));

// encrypting password using bcrypt, so that it returns a different 
// hashed password for each user
app.post("/signup", async (req,res) => {
    var username = req.body.name
    var email = req.body.email
    var name = req.body.name
    try{
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashedPassword);

        const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword});

        await user.save();

        res.status(201).send("User created successfully"); // Send response
    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating user");
    }
});