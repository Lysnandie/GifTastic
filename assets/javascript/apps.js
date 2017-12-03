$(document).ready(function(){

  //arary of tvshows
  var shows = ["Martin", "Empire", "Fresh Prince", "Scandal", "Queen Sugar", "Being Mary Jane", "Family Matters"];

  //make buttons
  function renderButtons() {
    //clears any items inside before looping through
    $("#gifs-here").empty();

    //loop through array and make buttons
    for (var i = 0; i < shows.length; i++) {
      //create button using JQuery for each item in array
      var a = $("<button>");

      //create class with JQuery
      a.addClass("show");

      //attribute
      a.attr("data-name", shows[i]);

      //text for button
      a.text(shows[i]);

      //add buttons to gif div
      $("#gifs-here").append(a);
    }
  }

//get user input
  $("#submit").on("click", function(event){
    //stops function from refreshing
    event.preventDefault();
    //grabs user input
    var show = $("#show-input").val().trim();
    //adds shows from textbox into TvShows array
    shows.push(show);
    //calls our renderButtons function
    renderButtons();

});

function gifs() {
  var tvShows = $(this).attr("data-name");

  //giphyURL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shows + "&api_key=0vhMQ7uc2Ur2tZjwl9A4bTLywDCAaxpo&limit=10";


  //ajax call to get gif from site
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response){

      var results = response.data;

      for (var i=0; i < results.length; i++) {

        var showDiv = $("<div>");

        var rating = results [i].rating;

        var p = $("<p>").text("rating: " + rating);

        var showImage = $("<img>");

        showImage.attr("src", results[i].images.fixed_height.url);

        showDiv.append(p);
        showDiv.append(showImage);

        $("#gifs-here").prepend(showDiv);
      }
    });
  }
});
