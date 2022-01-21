const mongoose = require("mongoose");

//creating movies schema
const MoviesSchema = mongoose.Schema(
    {
        id: Number,
        image: String,
        movie:String,
        details: String
    }
);

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;