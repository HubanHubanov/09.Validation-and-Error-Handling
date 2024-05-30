const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: [5, "Title should be at least 5 characters long"],
        match: [/^[a-zA-Z0-9\s]+$/, "Title should be alphanumeric"],
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        minLenght: [5, "Genre should be at least 5 characters long"],
        match: [/^[a-zA-Z0-9\s]+$/, "Genre should be alphanumeric" ]
    },
    director: {
        type: String,
        required: true,
        minLenght: [5, "Director should be at least 5 characters long"],
        match: [/^[a-zA-Z0-9\s]+$/, "Director should be alphanumeric"]
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2024
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 1000,
        match: [/^[a-zA-Z0-9\s]+$/, "Description should be alphanumeric"]
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "Image URL should start with 'http' or 'https'"] 
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: "Cast"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
    });
    


 const Movie = mongoose.model("Movie", movieSchema);
 
 module.exports = Movie;
    