let movieDiv = document.getElementById('moviediv');
let movieDetails = document.getElementById('movieDetails');

//let movieTitleHeading = document.getElementById('movieTitleHeading')


//btnFetchMovie.addEventListener('click'function()){
   let movieURL = "http://www.omdbapi.com/?s=batman&apikey=bdc3349a"

   let request = new XMLHttpRequest()

   request.open("GET", movieURL)

   request.send()

   request.onload = function(){
     if (request.status != 200) {
        console.log("Server not found")
     } else {
        console.log("Response Received")

        console.log(request.responseText)

        console.log(JSON.parse(request.responseText))

        let movieResponse = JSON.parse(request.responseText)

        displayMovies(movieResponse)
     }
   }


   function displayMovies(movie){

     let responseArray = movie.Search

     let arrayItems = responseArray.map(function(arrayItem){
       return `<li><img src = "${arrayItem.Poster}"/>
               <h3><a href="#" onclick ='displayMovieDetails("${arrayItem.imdbID}")'>${arrayItem.Title}</a></h3>

               </li>`
     })

     movieDiv.innerHTML = arrayItems.join("")

   }



function displayMovieDetails(id){

let movieDetailsURL = "http://www.omdbapi.com/?i=" + id + "&apikey=bdc3349a"

let request = new XMLHttpRequest()

request.open("GET", movieDetailsURL)

request.send()

request.onload = function(){
  if (request.status != 200) {
     console.log("Server not found")
  } else {
     console.log("Response Received")

     //console.log(request.responseText)

     //console.log(JSON.parse(request.responseText))

     let movieResponse = JSON.parse(request.responseText)





     addMovieDetailsToDisplay(movieResponse)

  }
}
}

function addMovieDetailsToDisplay(movie){
  let details = `
        <div>
        <p><img src="${movie.Poster}" class ="imageSize"/></p>
        </div>
        <div><p>${movie.Year}</p>
        <p>${movie.Rated}</p>
        <p>${movie.Released}</p>
        <p>${movie.Director}</p> </div>`


  movieDetails.innerHTML = details

}
