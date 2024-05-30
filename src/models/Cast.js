const mongoose = require("mongoose");
// const Movie = require("./Movie");

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        match: [/^[a-zA-Z0-9\s]+$/, "SPlace of mirth shpuld be aphanumeric"]

    },
     age: {
        type: Number,
        required: true,
        max: 120,
        min: 1
     },
     born: {
        type: String,
        required: true,
        minLength: 10,
        match: [/^[a-zA-Z0-9\s]+$/, "SPlace of mirth shpuld be aphanumeric"]
        
     },
     nameInMovie: {
        type: String,
        reqired: true,
        minLength: 5,
        match: [/^[a-zA-Z0-9\s]+$/, "SPlace of mirth shpuld be aphanumeric"]
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

const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;