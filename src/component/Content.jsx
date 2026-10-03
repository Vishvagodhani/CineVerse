import React, { useEffect, useState } from 'react';
import "../../css/Contentc.css";
import MovieSlider from "./MovieSlider";
import { Link } from "react-router-dom";

import { API_KEY } from "../api";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTM5MDBmZWQwZjhkODAwNDFmOWY5ODcyYjNjZDRiNiIsIm5iZiI6MTc5MDI1NzUwNy4xNDIwMDAyLCJzdWIiOiI2YWI1Mjk2MzY0OWYzZWNiZjI5NTUxYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WryJQdon-5KIPsSWm5vgPgD_0YZJVIkRtfT1-ywQPfw";

const TMDB_HEADERS = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

const FALLBACK_TRENDING = [
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-16",
    vote_average: 7.6,
    original_language: "en",
  },
  {
    id: 693134,
    title: "Dune: Part Two",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    release_date: "2024-03-01",
    vote_average: 8.6,
    original_language: "en",
  },
  {
    id: 872585,
    title: "Oppenheimer",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-21",
    vote_average: 8.6,
    original_language: "en",
  },
  {
    id: 414906,
    title: "The Batman",
    poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    release_date: "2022-03-04",
    vote_average: 7.8,
    original_language: "en",
  },
  {
    id: 157336,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-07",
    vote_average: 8.7,
    original_language: "en",
  },
  {
    id: 361743,
    title: "Top Gun: Maverick",
    poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    release_date: "2022-05-27",
    vote_average: 8.3,
    original_language: "en",
  },
];

const FALLBACK_POPULAR = [
  {
    id: 27205,
    title: "Inception",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
    original_language: "en",
  },
  {
    id: 299534,
    title: "Avengers: Endgame",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: "2019-04-26",
    vote_average: 8.4,
    original_language: "en",
  },
  {
    id: 634649,
    title: "Spider-Man: No Way Home",
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-17",
    vote_average: 8.2,
    original_language: "en",
  },
  {
    id: 475557,
    title: "Joker",
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    release_date: "2019-10-04",
    vote_average: 8.4,
    original_language: "en",
  },
  {
    id: 98,
    title: "Gladiator",
    poster_path: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    release_date: "2000-05-05",
    vote_average: 8.5,
    original_language: "en",
  },
  {
    id: 533535,
    title: "Deadpool & Wolverine",
    poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    release_date: "2024-07-26",
    vote_average: 7.9,
    original_language: "en",
  },
];

const FALLBACK_TOP_RATED = [
  {
    id: 278,
    title: "The Shawshank Redemption",
    poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    original_language: "en",
  },
  {
    id: 238,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-24",
    vote_average: 9.2,
    original_language: "en",
  },
  {
    id: 155,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    original_language: "en",
  },
  {
    id: 680,
    title: "Pulp Fiction",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    original_language: "en",
  },
  {
    id: 550,
    title: "Fight Club",
    poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    release_date: "1999-10-15",
    vote_average: 8.8,
    original_language: "en",
  },
  {
    id: 13,
    title: "Forrest Gump",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
    original_language: "en",
  },
];

const FALLBACK_UPCOMING = [
  {
    id: 83533,
    title: "Avatar 4",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2029-12-21",
    vote_average: 8.0,
    original_language: "en",
  },
  {
    id: 1003596,
    title: "Avengers: Secret Wars",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: "2027-05-07",
    vote_average: 8.5,
    original_language: "en",
  },
  {
    id: 1003598,
    title: "The Batman Part II",
    poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    release_date: "2026-10-02",
    vote_average: 8.2,
    original_language: "en",
  },
  {
    id: 569094,
    title: "Spider-Man: Beyond the Spider-Verse",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2027-06-18",
    vote_average: 8.7,
    original_language: "en",
  },
  {
    id: 872585,
    title: "Tron: Ares",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    release_date: "2025-10-10",
    vote_average: 7.8,
    original_language: "en",
  },
  {
    id: 1003599,
    title: "The Fantastic Four: First Steps",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2025-07-25",
    vote_average: 7.9,
    original_language: "en",
  },
];

function MovieCard({ mov, badgeText, badgeClass }) {
  const posterUrl = mov.poster_path
    ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
    : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";

  const rating = mov.vote_average ? Number(mov.vote_average).toFixed(1) : "N/A";
  const releaseYear = mov.release_date ? mov.release_date.substring(0, 4) : "";
  const language = (mov.original_language || "EN").toUpperCase();
  const title = mov.title || mov.original_title || "Untitled";

  return (
    <article className="movie-card" key={mov.id}>
      <Link to={`/movie/${mov.id}`} className="card-link">
        <div className="poster-wrap">
          {badgeText && (
            <span className={`badge ${badgeClass || ""}`}>{badgeText}</span>
          )}
          <span className="rating-chip">
            <i className="fa-solid fa-star"></i> {rating}
          </span>
          <img
            src={posterUrl}
            alt={title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";
            }}
          />
          <div className="poster-overlay">
            <span className="btn btn-primary btn-small">View Details</span>
          </div>
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <div className="card-meta">
            {releaseYear && <span>{releaseYear}</span>}
            {releaseYear && language && <span className="dot"></span>}
            {language && <span>{language}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}

function Content() {
  const [trending, setTrending] = useState(FALLBACK_TRENDING);
  const [popular, setPopular] = useState(FALLBACK_POPULAR);
  const [topRated, setTopRated] = useState(FALLBACK_TOP_RATED);
  const [upcoming, setUpcoming] = useState(FALLBACK_UPCOMING);

  // Trending Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
      {
        method: "GET",
        headers: TMDB_HEADERS,
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && Array.isArray(res.results) && res.results.length > 0) {
          setTrending(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback trending movies:", err.message);
      });
  }, []);

  // Popular Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      {
        method: "GET",
        headers: TMDB_HEADERS,
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && Array.isArray(res.results) && res.results.length > 0) {
          setPopular(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback popular movies:", err.message);
      });
  }, []);

  // Top Rated Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      {
        method: "GET",
        headers: TMDB_HEADERS,
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && Array.isArray(res.results) && res.results.length > 0) {
          setTopRated(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback top rated movies:", err.message);
      });
  }, []);

  // Upcoming Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
      {
        method: "GET",
        headers: TMDB_HEADERS,
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (res && Array.isArray(res.results) && res.results.length > 0) {
          setUpcoming(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback upcoming movies:", err.message);
      });
  }, []);

  return (
    <>
      <MovieSlider />

      {/* Trending Section */}
      <section className="section" id="trending">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What everyone's watching</span>
              <h2>Trending Movies</h2>
            </div>
            <Link to="/Movies" className="section-link">
              View All Movies <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="movie-grid">
            {(trending || []).map((mov) => (
              <MovieCard
                key={mov.id}
                mov={mov}
                badgeText="Trending"
                badgeClass=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="section section-alt" id="popular">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Audience favorites</span>
              <h2>Popular Movies</h2>
            </div>
            <Link to="/Movies" className="section-link">
              View All Movies <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="movie-grid">
            {(popular || []).map((mov) => (
              <MovieCard
                key={mov.id}
                mov={mov}
                badgeText="Popular"
                badgeClass=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="section" id="top-rated">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Critically acclaimed</span>
              <h2>Top Rated Movies</h2>
            </div>
            <Link to="/Movies" className="section-link">
              View All Movies <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="movie-grid">
            {(topRated || []).map((mov) => (
              <MovieCard
                key={mov.id}
                mov={mov}
                badgeText="Top Rated"
                badgeClass="badge-gold"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="section section-alt" id="upcoming">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Mark your calendar</span>
              <h2>Upcoming Movies</h2>
            </div>
            <Link to="/Movies" className="section-link">
              View All Movies <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="movie-grid">
            {(upcoming || []).map((mov) => (
              <MovieCard
                key={mov.id}
                mov={mov}
                badgeText="Upcoming"
                badgeClass="badge-soon"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;