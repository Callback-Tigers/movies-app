import React from "react";



const MovieDetailsDisplay = ({selectedMovie}) => {

  return(
    <div className="movie-details">
    {
      selectedMovie ?  (<div>
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.releaseYear}</p>
          <p>{selectedMovie.genre}</p>
          <img src={selectedMovie.poster} alt="movie-poster" />

      </div>)

      :
      ("")
          
      
     }

   </div>
  )
}

export default MovieDetailsDisplay;