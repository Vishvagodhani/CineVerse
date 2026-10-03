import React, { useEffect, useState } from "react";
import "../../css/Contentc.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../api";

const FALLBACK_SLIDER_MOVIES = [
  {
    id: 693134,
    title: "Dune: Part Two",
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520frq.jpg",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    vote_average: 8.6,
    release_date: "2024-03-01",
    original_language: "en",
  },
  {
    id: 872585,
    title: "Oppenheimer",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    vote_average: 8.6,
    release_date: "2023-07-21",
    original_language: "en",
  },
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, and the battles they fight to stay alive.",
    vote_average: 7.6,
    release_date: "2022-12-16",
    original_language: "en",
  },
];

function MovieSlider() {
  const [movies, setMovies] = useState(FALLBACK_SLIDER_MOVIES);
  const [current, setCurrent] = useState(0);
  const [watchlist, setWatchlist] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM5MDBmZWQwZjhkODAwNDFmOWY5ODcyYjNjZDRiNiIsIm5iZiI6MTc5MDI1NzUwNy4xNDIwMDAyLCJzdWIiOiI2YWI1Mjk2MzY0OWYzZWNiZjI5NTUxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WryJQdon-5KIPsSWm5vgPgD_0YZJVIkRtfT1-ywQPfw",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && Array.isArray(res.results) && res.results.length > 0) {
          setMovies(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback slider movies:", err.message);
      });
  }, []);

  useEffect(() => {
    if (!movies || movies.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
      setWatchlist(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const handlePrev = () => {
    if (!movies || movies.length === 0) return;
    setCurrent((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
    setWatchlist(false);
  };

  const handleNext = () => {
    if (!movies || movies.length === 0) return;
    setCurrent((prev) => (prev + 1) % movies.length);
    setWatchlist(false);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    setWatchlist(false);
  };

  if (!movies || movies.length === 0) {
    return null;
  }

  const movie = movies[current] || movies[0];
  const bgImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80";

  const posterImage = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";

  return (
    <section
      className="cine-slider"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="cine-scrim"></div>

      {/* Previous Button */}
      <button
        type="button"
        className="cine-arrow cine-arrow-left"
        onClick={handlePrev}
        aria-label="Previous movie"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="cine-arrow cine-arrow-right"
        onClick={handleNext}
        aria-label="Next movie"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="container cine-inner">
        {/* Movie Content */}
        <div className="cine-content">
          <span className="cine-label">
            <i className="fa-solid fa-clapperboard"></i>
            Editor's Pick
          </span>

          <h1 className="cine-title">{movie.title}</h1>

          <div className="cine-meta">
            <span className="cine-rating">
              <i className="fa-solid fa-star"></i>
              {movie.vote_average ? Number(movie.vote_average).toFixed(1) : "N/A"}
            </span>

            <span className="cine-dot"></span>

            <span>{movie.release_date ? movie.release_date.substring(0, 4) : ""}</span>

            {movie.original_language && (
              <>
                <span className="cine-dot"></span>
                <span>{movie.original_language.toUpperCase()}</span>
              </>
            )}
          </div>

          <p className="cine-desc">{movie.overview}</p>

          <div className="cine-actions">
            <Link
              to={`/movie/${movie.id}`}
              className="cine-btn cine-btn-primary"
            >
              <i className="fa-solid fa-circle-info"></i>
              View Details
            </Link>

            <button
              type="button"
              className="cine-btn cine-btn-ghost"
              onClick={() => setWatchlist(!watchlist)}
            >
              <i
                className={
                  watchlist ? "fa-solid fa-check" : "fa-solid fa-plus"
                }
              ></i>
              {watchlist ? "Added to Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>

        {/* Poster */}
        <div className="cine-poster-area">
          <div className="cine-poster-glow"></div>

          <div className="cine-poster">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={posterImage}
                alt={`${movie.title} poster`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="cine-controls">
        <span className="cine-counter">
          <span>{String(current + 1).padStart(2, "0")}</span>
          {" / "}
          <span>{String(movies.length).padStart(2, "0")}</span>
        </span>

        <div className="cine-dots">
          {movies.map((mov, index) => (
            <button
              key={mov.id || index}
              type="button"
              className={index === current ? "active" : ""}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to movie ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;