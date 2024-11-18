import React from "react";
import { Link } from "react-router-dom";  // Import Link component for navigation
import movieData from "./movieData.js";   // Import movie data

function MovieList() {
   return (
      <>
         <h2>Movie Database</h2>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Rating</th>
               </tr>
            </thead>
            <tbody>
               {movieData.map((movie) => (
                  <tr key={movie.movieId}>
                     <td>
                        <Link to={`/movie/${movie.movieId}`}>{movie.title}</Link> {/* Link to MovieDetails with movieId */}
                     </td>
                     <td>{movie.year}</td>
                     <td>{movie.rating}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}

export default MovieList;
