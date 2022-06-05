fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "b4585d4543msh7391fdbba299f92p105249jsna5cea662ef29"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
})