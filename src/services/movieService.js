const Movie = require("../models/Movie");
const Cast = require("../models/Cast");

exports.getAll = () => Movie.find();

// TODO: Filter result in mongodb
exports.search = (title, genre, year) => {
  // let result = await Movie.find().lean();
  let query = {};
  let query2 = Movie.find();


  if (title) {
    query.title = new RegExp(title, "i");
    query2 = query2.find({title: new RegExp(title, "i")}) 
  }

  if (genre) {
    query.genre = genre.toLowerCase();
    query2 = query2.find({genre: new RegExp(genre, "i")});

  }

  if (year) {
    query.year = year;
    query2 = query2.find({year})
  }

  return Movie.find(query);

  // return query2;
};


exports.getOne = (movieId) => Movie.findById(movieId).populate("casts");

exports.create = (movieData) => Movie.create(movieData);

exports.edit =(movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData)

exports.attach = async (movieId, castId) => {
  // return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});

  const movie = await this.getOne(movieId);

  // This is optional.
  // const cast = await Cast.findById(castId);
  // cast.movies.push(movie);
  // await cast.save();

  //TODO validate castId if exists
  //TODO validate if cast has already been added
  movie.casts.push(cast);

  await movie.save();

  return movie;
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

