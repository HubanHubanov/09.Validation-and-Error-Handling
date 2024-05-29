const mongoose = require("mongoose");
const Movie = require("./Movie");

const castScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     age: {
        type: Number,
        required: true,
        max: 120,
        min: 14
     },
     born: {
        type: String,
        required: true
     },
     nameInMovie: {
        type: String,
        reqired: true
     },
      castImage: {
        type: String,
        required: true,
        // match: /^https?:\/\// 
        validate: {
            validator(value) { 
                return /^https?:\/\//.test(value)
            },
            message: (props) => `${props.value} is invalid url for the castImage!` 
        }
      },
      // movies: [{
      //   type: mongoose.Types.ObjectId,
      //   ref: "Movie"
      // }]
    
});

const Cast = mongoose.model("Cast", castScheme);

module.exports = Cast;