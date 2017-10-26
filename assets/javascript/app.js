$(document).ready(function(){

//arary of tvshows
var tvShows = ["Martin", "Empire", "Fresh Prince", "Scandal", "Queen Sugar", "Being Mary Jane", "Family Matters"];

function renderButtons(){

  $("#gifs").html("");

  for(var i =0; i < tvShows.length; i++){

    var attr = $("<button>");

    attr.addClass("tvShow");

    attr.attr("data-name", tvShows[i]);

    attr.text(movies[i]);

    $("#gifs").append(attr);
  }
}


//On click for all buttons
$("#button").on("click", function() {

var tvShows = $(this).attr("data-show");


//giphy apiKey
//var APIKey = "&api_key=dc6zaTOxFJmzC&limit=10";

//giphyURL
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShows + "&api_key=0vhMQ7uc2Ur2tZjwl9A4bTLywDCAaxpo&limit=10";


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

  $("#gifs").prepend(showDiv);
}


});

//user input creates buttons that appends to tv Shows array buttons DIV

//data state if statement for still and animate
});

$(".submit-button").on("click", function(event){
  event.preventDefault();

  var show = $("#show").val().trim();
  var buttons = $("</button>s")
  showDiv.buttons.append();

  renderButtons();

});


});
