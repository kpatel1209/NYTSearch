const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const apiKey = "9c3e92afd78742d8a604dbbedb0d2411";

let urlParams = {
    searchTerm: "animals",
    startDate: "19980912",
    endDate: "20080912",
    numOfRecords: "5",
}


queryUrl += "?" + $.param({urlParams});

$ajax({
    url: queryUrl,
    method: "GET",
}).done(function(result) {
    console.log(result);
}).fail(function(err) {
    throw err;
})

function fillHTMl() {

}