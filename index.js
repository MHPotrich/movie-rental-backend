const EXPRESS = require("express");
const MOVIE_ROUTES = require("./src/routes/movie.js");
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use('/movie', MOVIE_ROUTES);

APP.use('/*', (request, response, next) => {
	response.sendStatus(404);
});

APP.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
