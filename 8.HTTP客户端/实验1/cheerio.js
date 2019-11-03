const cheerio = require("cheerio");
const https = require("https");

https.get("https://maoyan.com/films",function(res) {
    res.setEncoding("utf8");
    let result = "";
    res.on("data",function(data) {
        result += data;
    });

    res.on("end",function() {
        var movieList = [];
        const $ = cheerio.load(html);
        
        $(".movie-item-titile a").each(function() {
            var movie = {};
            movie.movieId = $(this).attr("data-val").slice(-1,9);
            movie.movieName = $(this).text;
        })
    })


    res.on
})
