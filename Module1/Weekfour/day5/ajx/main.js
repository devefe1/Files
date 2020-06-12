
// console.log("i am linked");
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
//     success: (data) => {
//       console.log(data);  
//     },
//     error: ()=> {
//         console.log("bad request");
//     }


// });

// const promise = $.ajax({
//     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen"
// });
// promise.then( 
//     (data)=> {
//         console.log(data);
//     },
//     () => {
//         console.log("Bad requests");
//     }
// )

$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();

        const userInput = $('input[type="text"]').val();
        let url = "http://www.omdbapi.com/?apikey=53aa2cd6&t=";
        
        let fullUrl = url + userInput;

        $.ajax({
        url: fullUrl
        }).then( 
        (data)=> {
            // console.log(data);
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rated').html(data.Rated);
            
        }, 
        () => {
            console.log("bad request");
        }
        );
    });

});
// let year = document.getElementById('year');
// let $year = $('#year')