const MoviesModel = require("./movies.js");
const UsersModel = require("./users.js");
require('dotenv').config;


const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());



var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://Mahita07:mahita23112002@cluster0.kvbh5.mongodb.net/book-my-show?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));


//http://localhost:5000/
app.get("/", (req,res)=> {
     return res.json({"WELCOME": 'BMS BACKEND'});
});

//http://localhost:5000/movies
app.get("/movies", async (req,res)=> {
    const getAllMovies = await MoviesModel.find();
    return res.json(getAllMovies);
});

//http://localhost:5000/movie/:id
app.get("/movie/:id", async (req,res)=> {
    const {id} = req.params;
    const getAMovie = await MoviesModel.findOne({_id: id});
    return res.json(getAMovie);
});

//http://localhost:5000/user-register
app.post("/user-register", async (req,res)=> {
   const addNewUser = await UsersModel.create(req.body);
   console.log(req.body);
   console.log(addNewUser);
   return res.json({userAdded: req.body, Message: "User was added."});
});

app.listen(5000,() => {
    console.log("EXPRESS IS FLYING");
})