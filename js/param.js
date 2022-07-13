// when document is ready, run this function
$(document).ready(function(){
    function getParameter(p) {
        var url = window.location.search.substring(1);
        var varUrl = url.split('&');
        for (var i = 0; i < varUrl.length; i++)
        {
            var parameter = varUrl[i].split('=');
            if (parameter[0] == p)
            {
                return parameter[1];
            }
        }
    }
    var movie = getParameter('movie');
    console.log(movie);
    $( "#searchBox" ).val(function(n, p){
        return movie;
    });
    // // get imdb rating from movie id
    // $.ajax({
    //     url: "http://www.omdbapi.com/?i=" + movie + "&plot=short&r=json",
    //     dataType: 'jsonp',
    //     cache: true,
    //     jsonp: false,
    //     jsonpCallback: "imdb$" + movie
    // }).done(function (result) {
    //     console.log(result);
    //     $("#imdbRating").text(result.imdbRating);
    // }).fail(function (result) {
    //     console.log(result);
    // }
    // );

    // scrape movie rating from imdb
    // $.ajax({
    //     url: "http://www.imdb.com/title/" + movie + "/",
    //     dataType: 'html',
    //     cache: true,
    //     jsonp: false,
    //     jsonpCallback: "imdb$" + movie
    // }).done(function (result) {
    //     console.log(result);
    //     var rating = $(result).find(".star-box-giga-star").text();
    //     $("#imdbRating").text(rating);
    // }).fail(function (result) {
    //     console.log(result);
    // }
    // );
    // load imdb rating using movie id
    $.ajax({
        url: "https://www.imdb.com/title/" + movie + "/",
        dataType: 'html',
        cache: true,
        jsonp: false,
        jsonpCallback: "imdb$" + movie
    }).done(function (result) {
        console.log(result);
        var rating = $(result).find(".star-box-giga-star").text();
        $("#imdbRating").text(rating);
    }
    ).fail(function (result) {
        console.log(result);
    }
    );
});