let response = null

$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "GK6bBl6WPG94rv04QvIaCVM9D"
    }
}).done(function(data) {
  console.log("Retrieved " + data.length + " records from the dataset!");
  response = data;
});


//prints the user input amount of complaints
const boroughButtons = document.getElementsByClassName("buttons");

$('.buttons').click(function getEntries() {
    console.log(myText.value)
    $("p").empty()
    for (let i = 1; i <= myText.value; i++) {
      console.log(i);
      /* $.data.property = $('borough').html(data.borough) */
      $("p").append(i + "<br />");
    }
    console.log(response);
    }
  
);