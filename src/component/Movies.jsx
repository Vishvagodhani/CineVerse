import React, { useEffect, useState } from "react";
import "../../css/Movies.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../api";

const FALLBACK_MOVIES = [
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-16",
    original_language: "en",
    vote_average: 7.6,
    overview:
      "Jake Sully and his family flee to the ocean-dwelling Metkayina clan of Pandora, fighting to protect their new home from returning human threats.",
  },
  {
    id: 693134,
    title: "Dune: Part Two",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    release_date: "2024-03-01",
    original_language: "en",
    vote_average: 8.5,
    overview:
      "Paul Atreides unites with Chani and the Fremen to seek revenge against the conspirators who destroyed his family, torn between the love of his life and his visions of a terrible future.",
  },
  {
    id: 872585,
    title: "Oppenheimer",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-21",
    original_language: "en",
    vote_average: 8.4,
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb, and the moral weight he carried through the Manhattan Project and beyond.",
  },
  {
    id: 157336,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-07",
    original_language: "en",
    vote_average: 8.7,
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival, racing against time as Earth grows less habitable.",
  },
  {
    id: 155,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-18",
    original_language: "en",
    vote_average: 9.0,
    overview:
      "When the menace known as the Joker wreaks havoc on Gotham, Batman must face one of his greatest psychological and physical tests to fight injustice.",
  },
];

function Movies() {
  const [movies, setMovies] = useState(FALLBACK_MOVIES);

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
        console.warn("Using fallback movies list:", err.message);
      });
  }, []);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Full Catalog</span>
          <h1>Explore Movies</h1>
          <p>
            Five essential titles, handpicked for their scale, craft, and staying
            power. Tap into any one for the full story.
          </p>
        </div>
      </section>

      <section className="movies-listing">
        <div className="container">
          {(movies || []).map((mov) => {
            const posterUrl = mov.poster_path
              ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
              : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";

            return (
              <article className="movie-card-lg" key={mov.id}>
                <div className="poster-wrap">
                  <img
                    src={posterUrl}
                    alt={mov.title || mov.original_title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80";
                    }}
                  />
                </div>

                <div className="info">
                  <h3>{mov.title || mov.original_title}</h3>

                  <div className="card-meta">
                    <span>
                      {mov.release_date
                        ? mov.release_date.substring(0, 4)
                        : ""}
                    </span>

                    <span>{(mov.original_language || "EN").toUpperCase()}</span>

                    <span>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "var(--gold)" }}
                      ></i>{" "}
                      {mov.vote_average
                        ? Number(mov.vote_average).toFixed(1)
                        : "N/A"}
                    </span>
                  </div>

                  <p className="desc">{mov.overview}</p>

                  <div className="actions">
                    <Link
                      to={`/movie/${mov.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Movies;