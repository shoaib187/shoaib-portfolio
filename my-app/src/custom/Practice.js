import React, { useRef, useState } from "react";

const MovieFilter = () => {
  const [movies, setMovies] = useState([]); // Store the list of filtered movies
  const genreRef = useRef(""); // Store selected genre locally
  const ratingRef = useRef(0); // Store selected rating locally

  // Function to fetch filtered movies
  const fetchFilteredMovies = () => {
    const genre = genreRef.current; // Get current genre
    const rating = ratingRef.current; // Get current rating

    // Fetch movies based on genre and rating (this could be a real API call)
    const filteredMovies = mockFetchMovies(genre, rating); // mock function
    setMovies(filteredMovies); // Update movies list
  };

  // Mock function to simulate fetching movies
  const mockFetchMovies = (genre, rating) => {
    // This would normally be an API call to fetch filtered movies
    const allMovies = [
      { title: "Movie A", genre: "Action", rating: 5 },
      { title: "Movie B", genre: "Comedy", rating: 4 },
      { title: "Movie C", genre: "Action", rating: 3 },
      { title: "Movie D", genre: "Drama", rating: 4 },
    ];
    return allMovies.filter(
      (movie) =>
        (genre ? movie.genre === genre : true) && movie.rating >= rating
    );
  };

  return (
    <div>
      <h1>Filter Movies</h1>

      <label> 
        Genre:
        <select
          onChange={(e) => (genreRef.current = e.target.value)} // Store genre locally
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
      </label>

      {/* Rating filter */}
      <label>
        Minimum Rating:
        <input
          type="number"
          onChange={(e) => (ratingRef.current = e.target.value)} // Store rating locally
          min="0"
          max="5"
        />
      </label>

      {/* Apply Filters button */}
      <button onClick={fetchFilteredMovies}>Apply Filters</button>

      {/* Display filtered movies */}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre} (Rating: {movie.rating})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieFilter;
