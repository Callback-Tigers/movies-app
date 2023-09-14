import React,{useState} from "react";
import moviesData from "../data/moviesData";
// import MovieDetailsDisplay from "./MovieDetailsDisplay";


const MovieNameDisplay = ({addSelectedMovie}) => {
      // props => {addSelectedMovie: setSelectedMovie}
      // const [selectedMovie, setSelectedMovie] = useState("")


      return(
            <div className="movies-name">
            {
                  moviesData.map((movie) => {
                      return(
                        <p onClick={()=>addSelectedMovie(movie)}>{movie.title}</p>
                      )
                  })
            }
              {/* <MovieDetailsDisplay selectedMovie={selectedMovie} /> */}

      </div>
      )
}

export default MovieNameDisplay;



