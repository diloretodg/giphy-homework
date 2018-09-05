var topics = ["Alien", "Oceans 11", "Moana", "Pulp Fiction"];



// creates button for each movie in topic array //
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i , i < topics.length; i++) {
        console.log("making the button for "+ i);
        var btn = $("<button>");
        btn.addClass("movie-btn button");
        btn.attr("data-name", topics[i]);
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
});

//  Handles on click animation play/pause  //
$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});


renderButtons();