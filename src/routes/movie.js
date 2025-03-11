const EXPRESS = require("express");
const MOVIE_CONTROLLER = require('../controllers/movie.js');
const ROUTER = EXPRESS.Router();

function logger(request, response, next){
	console.log(request.method + " - " + request.url);
	next();
}

ROUTER.get("/", logger, MOVIE_CONTROLLER.getMovies);
ROUTER.get("/:id", logger, MOVIE_CONTROLLER.getMovie);
ROUTER.post("/", logger, MOVIE_CONTROLLER.addMovie);
ROUTER.put("/:id", logger, MOVIE_CONTROLLER.updateMovie);
ROUTER.delete("/:id", logger, MOVIE_CONTROLLER.deleteMovie);

module.exports = ROUTER;
