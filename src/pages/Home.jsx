import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      releseDate: "1994",
      url: "https://images.unsplash.com/photo-1593642532933-4f7f5e3b7f0b",
    },
    {
      id: 2,
      title: "The Godfather",
      releseDate: "1972",
      url: "https://images.unsplash.com/photo-1593642532933-4f7f5e3b7f0b",
    },
    {
      id: 3,
      title: "The Dark Knight",
      releseDate: "2008",
      url: "https://images.unsplash.com/photo-1593642532933-4f7f5e3b7f0b",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for ${searchQuery}`);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
