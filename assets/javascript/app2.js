$("button").on("click", function() {
    let url = $(this).attr("data-term");
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "9c3e92afd78742d8a604dbbedb0d2411"
    });

    $.ajax({
        url: queryURL,
        method: 'GET'
    
        .then(function(response) {
            let results = response.data;

            






        })

    });
  });