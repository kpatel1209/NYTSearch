let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

let urlParams = {
    'api-key': "9c3e92afd78742d8a604dbbedb0d2411",
    'q': "animals",
    'begin_date': "19980912",
    'end_date': "20080912",
    'page': "5",
}

function getResults(searchTerm, numRecords, startDate, endDate) {
    urlParams.q = searchTerm;
    urlParams.page = numRecords;
    urlParams.begin_date = startDate;
    urlParams.end_date = endDate;

    queryUrl += "?" + $.param(urlParams);

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).done(function (result) {
        console.log(result);
        let article = $("<div>");
        let header = $("<p>").text(result.response.docs[0].headline.main);
        article.append(header);
        $("#display").append(article);
    }).fail(function (err) {
        throw err;
    })
}


//getResults();