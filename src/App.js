import React from "react";
import MovieList from "./MovieList.js";
import MovieDetails from "./MovieDetails.js";
import { Routes, Route } from "react-router-dom"; // Import necessary components from React Router

function App() {
   return (
      <>
         <h1>Movie Database</h1>
         <Routes>
            <Route path="/" element={<MovieList />} />  {/* Route for movie list */}
            <Route path="/movie/:movieId" element={<MovieDetails />} />  {/* Route for movie details */}
         </Routes>
      </>
   );
}

export default App;
