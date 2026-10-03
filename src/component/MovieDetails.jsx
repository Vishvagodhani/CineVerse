import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/Avatar.css";
import { API_KEY } from "../api";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Movie Details API
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`, {
      method: "GET",
      headers: {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM5MDBmZWQwZjhkODAwNDFmOWY5ODcyYjNjZDRiNiIsIm5iZiI6MTc5MDI1NzUwNy4xNDIwMDAyLCJzdWIiOiI2YWI1Mjk2MzY0OWYzZWNiZjI5NTUxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WryJQdon-5KIPsSWm5vgPgD_0YZJVIkRtfT1-ywQPfw",
        "Content-Type":"application/json",
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Movie details not available (HTTP ${res.status})`);
        return res.json();
      })
      .then((res) => {
        if (res && res.id) {
          setMovie(res);
        } else {
          throw new Error("Invalid movie response");
        }
      })
      .catch((err) => {
        console.warn("MovieDetails fetch error:", err.message);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // Check if already in watchlist whenever the movie id changes
    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsInWatchlist(existingWatchlist.some((item) => item.id === Number(id)));

  }, [id]);

  // Cast & Crew API
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`, {
      method: "GET",
      headers: {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM5MDBmZWQwZjhkODAwNDFmOWY5ODcyYjNjZDRiNiIsIm5iZiI6MTc5MDI1NzUwNy4xNDIwMDAyLCJzdWIiOiI2YWI1Mjk2MzY0OWYzZWNiZjI5NTUxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WryJQdon-5KIPsSWm5vgPgD_0YZJVIkRtfT1-ywQPfw",
        "Content-Type":"application/json",
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && res.cast) setCredits(res);
      })
      .catch((err) => {
        console.warn("Credits fetch error:", err.message);
      });

  }, [id]);

  // Loading & Error States
  if (loading && !movie) {
    return (
      <div className="container" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2>Loading Movie Details...</h2>
      </div>
    );
  }

  if (error && !movie) {
    return (
      <div className="container" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2>Unable to Load Movie</h2>
        <p style={{ color: "var(--text-dim)", margin: "16px 0 24px" }}>{error}</p>
        <a href="/" className="btn btn-primary">Return to Home</a>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2>Movie Not Found</h2>
        <a href="/" className="btn btn-primary" style={{ marginTop: "20px" }}>Return to Home</a>
      </div>
    );
  }


  // Watchlist
  const addToWatchlist = () => {

    if (isInWatchlist) return;

    const watchlist = JSON.parse(
      localStorage.getItem("watchlist")
    ) || [];

    const movieData = {
      id: movie.id,
      title: movie.title,
      year: movie.release_date
        ? movie.release_date.substring(0, 4)
        : "N/A",
      rating: movie.vote_average,
      genre:
        movie.genres && movie.genres.length > 0
          ? movie.genres[0].name
          : "N/A",
      image:
        "https://image.tmdb.org/t/p/w500/" +
        movie.poster_path
    };

    const alreadyAdded = watchlist.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      watchlist.push(movieData);
      localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
      );
      setIsInWatchlist(true);
    }
  };


  return (
    <>
      <main>

        {/* ================= HERO ================= */}

        <section className="detail-hero avatar-hero">

          <div className="container detail-hero-inner">

            <div className="detail-poster">

              <img
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  movie.poster_path
                }
                alt={movie.title}
              />

            </div>


            <div className="detail-info">

              <p className="tagline">
                Explore the movie.
              </p>

              <h1>{movie.title}</h1>


              <div className="detail-meta">

                <span className="rating">

                  <i className="fa-solid fa-star"></i>

                  {" "}
                  {movie.vote_average
                    ? movie.vote_average.toFixed(1)
                    : "N/A"}{" "}
                  / 10

                </span>


                <span className="dot"></span>


                <span>
                  {movie.release_date || "N/A"}
                </span>


                <span className="dot"></span>


                <span>
                  {movie.runtime
                    ? Math.floor(movie.runtime / 60) +
                      "h " +
                      (movie.runtime % 60) +
                      "m"
                    : "N/A"}
                </span>


                <span className="dot"></span>


                <span>
                  Director:{" "}
                  {credits &&
                  credits.crew &&
                  credits.crew.find(
                    (person) =>
                      person.job === "Director"
                  )
                    ? credits.crew.find(
                        (person) =>
                          person.job === "Director"
                      ).name
                    : "N/A"}
                </span>

              </div>


              {/* GENRES */}

              <div className="genre-tags">

                {movie.genres &&
                  movie.genres.map((genre) => (

                    <span
                      className="genre-tag"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>

                  ))}

              </div>


              {/* DESCRIPTION */}

              <p className="detail-desc">
                {movie.overview}
              </p>


              {/* ACTIONS */}

              <div className="detail-actions">

                <a
                  href="#reviews"
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-star"></i>{" "}
                  Rate This Movie
                </a>


                <button
                  className="btn btn-ghost"
                  onClick={addToWatchlist}
                  style={isInWatchlist ? { opacity: 0.75, cursor: "default" } : {}}
                >
                  {isInWatchlist ? (
                    <>
                      <i className="fa-solid fa-check"></i>{" "}
                      Added to Watchlist
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-plus"></i>{" "}
                      Add to Watchlist
                    </>
                  )}
                </button>


                <a
                  href="#"
                  className="btn btn-ghost"
                >
                  <i className="fa-solid fa-share-nodes"></i>{" "}
                  Share
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TABS ================= */}

        <nav className="detail-tabs">

          <div className="container">

            <a href="#overview">
              Overview
            </a>

            <a href="#reviews">
              Reviews
            </a>

            <a href="#cast">
              Cast & Crew
            </a>

            <a href="#media">
              Media
            </a>

            <a href="#moviesrelated">
              Related Movies
            </a>

          </div>

        </nav>


        <div className="container">


          {/* ================= INFO ================= */}

          <section
            className="detail-section"
            style={{ paddingTop: "60px" }}
          >

            <div className="info-panel">


              <div className="info-item">

                <span className="label">
                  Director
                </span>

                <span className="value">

                  {credits &&
                  credits.crew &&
                  credits.crew.find(
                    (person) =>
                      person.job === "Director"
                  )
                    ? credits.crew.find(
                        (person) =>
                          person.job === "Director"
                      ).name
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Writers
                </span>

                <span className="value">

                  {credits &&
                  credits.crew
                    ? credits.crew
                        .filter(
                          (person) =>
                            person.department ===
                            "Writing"
                        )
                        .slice(0, 3)
                        .map(
                          (person) => person.name
                        )
                        .join(", ")
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Release Date
                </span>

                <span className="value">
                  {movie.release_date || "N/A"}
                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Runtime
                </span>

                <span className="value">

                  {movie.runtime
                    ? Math.floor(movie.runtime / 60) +
                      "h " +
                      (movie.runtime % 60) +
                      "m"
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Language
                </span>

                <span className="value">
                  {movie.original_language
                    ? movie.original_language.toUpperCase()
                    : "N/A"}
                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Country
                </span>

                <span className="value">

                  {movie.production_countries &&
                  movie.production_countries.length > 0
                    ? movie.production_countries
                        .map(
                          (country) =>
                            country.name
                        )
                        .join(", ")
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Budget
                </span>

                <span className="value">

                  {movie.budget
                    ? "$" +
                      movie.budget.toLocaleString()
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Box Office
                </span>

                <span className="value">

                  {movie.revenue
                    ? "$" +
                      movie.revenue.toLocaleString()
                    : "N/A"}

                </span>

              </div>


              <div
                className="info-item"
                style={{ borderBottom: "none" }}
              >

                <span className="label">
                  Production Company
                </span>

                <span className="value">

                  {movie.production_companies &&
                  movie.production_companies.length > 0
                    ? movie.production_companies
                        .map(
                          (company) =>
                            company.name
                        )
                        .slice(0, 3)
                        .join(", ")
                    : "N/A"}

                </span>

              </div>

            </div>

          </section>


          {/* ================= OVERVIEW ================= */}

          <section
            className="detail-section"
            id="overview"
          >

            <h2>
              Overview
            </h2>

            <p className="synopsis">
              {movie.overview}
            </p>


            <div className="overview-grid">


              <div className="info-item">

                <span className="label">
                  Genres
                </span>

                <span className="value">

                  {movie.genres
                    ? movie.genres
                        .map(
                          (genre) =>
                            genre.name
                        )
                        .join(", ")
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Release Date
                </span>

                <span className="value">
                  {movie.release_date || "N/A"}
                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Runtime
                </span>

                <span className="value">

                  {movie.runtime
                    ? Math.floor(movie.runtime / 60) +
                      "h " +
                      (movie.runtime % 60) +
                      "m"
                    : "N/A"}

                </span>

              </div>


              <div className="info-item">

                <span className="label">
                  Languages
                </span>

                <span className="value">
                  {movie.spoken_languages &&
                  movie.spoken_languages.length > 0
                    ? movie.spoken_languages
                        .map(
                          (language) =>
                            language.english_name
                        )
                        .join(", ")
                    : "N/A"}
                </span>

              </div>

            </div>

          </section>


          {/* ================= REVIEWS ================= */}

          <section
            className="detail-section"
            id="reviews"
          >

            <h2>
              Reviews
            </h2>


            <div className="review-grid">

              <article className="review-card">

                <div className="review-head">

                  <div className="avatar">

                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer"
                    />

                  </div>


                  <div className="review-who">

                    <h4>
                      Movie Explorer User
                    </h4>

                    <span className="review-date">
                      Recent Review
                    </span>

                    <div className="stars">

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-regular fa-star"></i>

                    </div>

                  </div>

                </div>


                <p className="review-text">
                  A great movie with an
                  interesting story and
                  impressive visuals.
                </p>

              </article>


              <article className="review-card">

                <div className="review-head">

                  <div className="avatar">

                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer"
                    />

                  </div>


                  <div className="review-who">

                    <h4>
                      Movie Fan
                    </h4>

                    <span className="review-date">
                      Recent Review
                    </span>

                    <div className="stars">

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                    </div>

                  </div>

                </div>


                <p className="review-text">
                  The movie delivers a
                  memorable cinematic
                  experience.
                </p>

              </article>


              <article className="review-card">

                <div className="review-head">

                  <div className="avatar">

                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer"
                    />

                  </div>


                  <div className="review-who">

                    <h4>
                      Cinema Lover
                    </h4>

                    <span className="review-date">
                      Recent Review
                    </span>

                    <div className="stars">

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-solid fa-star"></i>

                      <i className="fa-regular fa-star"></i>

                    </div>

                  </div>

                </div>


                <p className="review-text">
                  Strong performances and
                  an engaging story make
                  this movie worth watching.
                </p>

              </article>

            </div>


            <div className="rate-widget">

              <h4>
                Rate This Movie
              </h4>

              <div
                className="star-row"
                aria-label="5 out of 5 stars"
              >

                <i className="fa-solid fa-star filled"></i>

                <i className="fa-solid fa-star filled"></i>

                <i className="fa-solid fa-star filled"></i>

                <i className="fa-solid fa-star filled"></i>

                <i className="fa-regular fa-star"></i>

              </div>

            </div>

          </section>


          {/* ================= CAST ================= */}

          <section
            className="detail-section"
            id="cast"
          >

            <h2>
              Cast & Crew
            </h2>


            <div className="cast-grid">

              {credits &&
              credits.cast &&
              credits.cast
                .slice(0, 8)
                .map((actor) => (

                  <div
                    className="cast-card"
                    key={actor.id}
                  >

                    <div className="cast-photo">

                      <img
                        src={
                          actor.profile_path
                            ? "https://image.tmdb.org/t/p/w300/" +
                              actor.profile_path
                            : "https://via.placeholder.com/300x300"
                        }
                        alt={actor.name}
                      />

                    </div>


                    <h4>
                      {actor.name}
                    </h4>

                    <span className="character">
                      {actor.character}
                    </span>

                  </div>

                ))}

            </div>

          </section>


          {/* ================= MEDIA ================= */}

          <section
            className="detail-section"
            id="media"
          >

            <h2>
              Media
            </h2>


            <div className="media-grid">

              {movie.backdrop_path && (

                <div className="media-item">

                  <img
                    src={
                      "https://image.tmdb.org/t/p/w780/" +
                      movie.backdrop_path
                    }
                    alt={movie.title}
                  />

                  <div className="media-overlay">

                    <i className="fa-solid fa-expand"></i>

                  </div>

                </div>

              )}


              {movie.poster_path && (

                <div className="media-item">

                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" +
                      movie.poster_path
                    }
                    alt={movie.title}
                  />

                  <div className="media-overlay">

                    <i className="fa-solid fa-expand"></i>

                  </div>

                </div>

              )}

            </div>

          </section>


          {/* ================= RELATED MOVIES ================= */}

          <section
            className="detail-section"
            id="moviesrelated"
            style={{ borderBottom: "none" }}
          >

            <h2>
              Related Movies
            </h2>


            <div className="related-grid">

              <article className="movie-card">

                <div className="poster-wrap">

                  <img
                    src={
                      movie.poster_path
                        ? "https://image.tmdb.org/t/p/w500/" +
                          movie.poster_path
                        : ""
                    }
                    alt={movie.title}
                  />

                </div>


                <div className="card-body">

                  <h3>
                    {movie.title}
                  </h3>


                  <div className="card-meta">

                    <span>
                      {movie.release_date
                        ? movie.release_date.substring(0, 4)
                        : "N/A"}
                    </span>

                    <span className="dot"></span>

                    <span>
                      {movie.genres &&
                      movie.genres.length > 0
                        ? movie.genres[0].name
                        : "Movie"}
                    </span>

                  </div>

                </div>

              </article>

            </div>

          </section>

        </div>

      </main>
    </>
  );
}

export default MovieDetails;