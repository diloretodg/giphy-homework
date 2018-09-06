var topics = ["Alien", "Blade Runner", "Thor Ragnarock", "Drive", "Shawn of the Dead", "Tropic Thunder", "The Disaster Artist", "American Hustle", "Mission Impossible", "Ocean's Eleven", "The Princess Bride", "Reservior Dogs", "Moana", "Pulp Fiction", "Django", "Kill Bill"];



// creates button for each movie in topic array //
function renderButtons() {
    $("#movie-buttons-display").empty();
    for (var i = 0; i , i < topics.length; i++) {
        console.log("making the button for "+ i);
        var btn = $("<button>");
        btn.addClass("gif-btn btn btn-primary m-1");
        btn.attr("data-topic", topics[i]);
        btn.text(topics[i]);
        $("#movie-buttons-display").append(btn);
    }
}

// takes value from input and adds to topics array for button //
 $("#add-movie").on("click", function(event) {
    event.preventDefault();
    var movie = $("#movie-input").val().trim();
    topics.push(movie);
    renderButtons();
    $("#movie-input").val("");
});

// makes gifs from movie buttons
$(document).on("click", ".gif-btn", function() {
    console.log("gif button pressed: " + $(this).attr("data-topic") )
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
      .then(function(response) {
        $("#gif-display").empty();  
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          var topicDiv = $("<a>");
          var rating = $("<p>").text("Rating: " + results[i].rating);
          var topicImage = $("<img>")
          .attr("src", results[i].images.fixed_height.url)
          .attr("class", "gif")
          .addClass("mx-1")
          .attr("data-state", "animate")
          .attr("data-still", results[i].images.fixed_height_still.url);
          topicDiv.append(rating);
          topicDiv.append(topicImage);
          $("#gif-display").prepend(topicDiv);
        }
      });
  });

//  Handles on click animation play/pause does not work yet... //
$(document).on("click",".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});

//  initializes buttons from our array
renderButtons();