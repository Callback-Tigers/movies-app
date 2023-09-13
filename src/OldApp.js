import React, {useState} from "react";

import "./style.css"

// Hey dear ai, please generate 10 bollyuwood movies in array of object alonng with its details

let moviesData = [
    {"title": "3 Idiots", "releaseYear": 2009, "genre": "Drama/Comedy", poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"},
    {"title": "Dangal", "releaseYear": 2016, "genre": "Biographical/Sports",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"},
    {"title": "Sholay", "releaseYear": 1975, "genre": "Action/Adventure", poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg"},
    {"title": "PK", "releaseYear": 2014, "genre": "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg"},
    {"title": "Lagaan", "releaseYear": 2001, "genre": "Musical/Sports", poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"},
    {"title": "Chennai Express", "releaseYear": 2019, "genre": "Funny", poster: "https://upload.wikimedia.org/wikipedia/en/3/3e/Chennai_Express_Poster.jpg"},
    {"title": "Kabhi Khushi Kabhie Gham", "releaseYear": 2001, "genre": "Family/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Kabhi_Khushi_Kabhie_Gham_poster.jpg"},
    {"title": "Dil Chahta Hai", "releaseYear": 2001, "genre": "Drama/Comedy", poster: "https://upload.wikimedia.org/wikipedia/en/9/9c/Dil_Chahta_Hai_poster.jpg"},
    {"title": "Barfi!", "releaseYear": 2012, "genre": "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi_poster.jpg"},
    {"title": "Queen", "releaseYear": 2013, "genre": "Drama/Comedy", poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg"}
  ]
  

  const OldApp = () => {
     
    const [selectedMovie, setSelectedMovie] = useState("")

    console.log(selectedMovie)
       return(
        <div className="App">

            <div className="movies-name">
                  {
                        moviesData.map((movie) => {
                            return(
                              <p onClick={()=>setSelectedMovie(movie)}>{movie.title}</p>
                            )
                        })
                  }
            </div>
            <div className="movie-details">
                  {
                    selectedMovie!="" ?  (<div>
                        <h1>{selectedMovie.title}</h1>
                        <p>{selectedMovie.releaseYear}</p>
                        <p>{selectedMovie.genre}</p>
                        <img src={selectedMovie.poster} alt="movie-poster" />

                    </div>)

                    :
                    ("")
                        
                    
                  }

            </div>

        </div>
       )
  }

    export default OldApp;


    // let a = 2 

    // z = a>1 && ++a 

    // console.log(a)