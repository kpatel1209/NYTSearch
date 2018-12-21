$("#searchButton").on("click", function(){
    //console.log("this works");
    
    let searchTerm = $("#searchTerm").val();
    console.log(searchTerm);

    let retrieveRecords = $("#retrieveRecords").val();
    console.log(retrieveRecords);

    let startYear = $("#startYear").val();
    console.log(startYear);

    let endYear = $("#endYear").val();
    console.log(endYear);

    getResults(searchTerm, retrieveRecords, startYear, endYear);


})






    