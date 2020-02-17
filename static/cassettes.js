$(document).ready(function () {
    /*
    - get a reference to the 'cassette_list' UL element
    - do a GET request to the server /cassettes URL
    - IF the get request succeeds, then:
        for each cassette in the cassetteList:
            append a LI containing the cassette title.
      OTHERWISE (our get request failed for some reason, bummer..)
        Append an error messsage to the cassette-list UL element

    Once that works, update the express server to get the data from mongo...
    */
    var cassette_list = $("#cassette_list");  // aka document.getElementById
    var data = $.get('cassettes').done(function(data){
        for (cassette of data.cassettesList) {
            cassette_list.append(`<li>${cassette.title}</li>`)
        }
    }).fail(function (err){
        console.log('uh oh!');
        console.log(err);
    })

})
