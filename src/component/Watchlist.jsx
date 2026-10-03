import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedMovies =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    setWatchlist(savedMovies);
  }, []);

  const removeMovie = (id) => {
    const updatedList = watchlist.filter(
      (movie) => movie.id !== id
    );

    setWatchlist(updatedList);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updatedList)
    );
  };

  return (
    <main className="watchlist-page">
      <div className="container">

        <h1>My Watchlist</h1>

        {watchlist.length === 0 ? (
          <p>No movies added to your watchlist.</p>
        ) : (
          <div className="movie-grid">

            {watchlist.map((movie) => (
              <article className="movie-card" key={movie.id}>

                <div className="poster-wrap">

                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <span className="rating-chip">
                    ⭐ {movie.rating}
                  </span>

                </div>

                <div className="card-body">

                  <h3>{movie.title}</h3>

                  <div className="card-meta">
                    <span>{movie.year}</span>
                    <span className="dot"></span>
                    <span>{movie.genre}</span>
                  </div>

                  <button
                    className="btn btn-ghost"
                    onClick={() => removeMovie(movie.id)}
                    style={{ marginTop: "15px" }}
                  >
                    <i className="fa-solid fa-trash"></i>
                    Remove
                  </button>

                </div>

              </article>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default Watchlist;