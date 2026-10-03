import React, { useEffect, useState } from "react";
import "../../css/Celebrities.css";
import { API_KEY } from "../api";

const FALLBACK_CELEBRITIES = [
  {
    id: 1158,
    name: "Al Pacino",
    profile_path: "/fMDFeRgbtRQQxPrUtbk0JGKv0GL.jpg",
    known_for_department: "Acting",
  },
  {
    id: 3896,
    name: "Liam Neeson",
    profile_path: "/bboldwqSC6tdw2iL6631Bh9GQ0M.jpg",
    known_for_department: "Acting",
  },
  {
    id: 3894,
    name: "Christian Bale",
    profile_path: "/b7fTC9WFkgqGOv77m0CuCPdUrie.jpg",
    known_for_department: "Acting",
  },
  {
    id: 2037,
    name: "Cillian Murphy",
    profile_path: "/llkbyPKPZeP6LoU5i8wOpV1yZfT.jpg",
    known_for_department: "Acting",
  },
  {
    id: 1190668,
    name: "Timothée Chalamet",
    profile_path: "/BE2sdjpgsa2rNTFa66l7up5UGH.jpg",
    known_for_department: "Acting",
  },
  {
    id: 505710,
    name: "Zendaya",
    profile_path: "/so3G5b6eCLSmB5e297l98bbx8iP.jpg",
    known_for_department: "Acting",
  },
];

function Celebrities() {
  const [celebrities, setCelebrities] = useState(FALLBACK_CELEBRITIES);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
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
          setCelebrities(res.results);
        }
      })
      .catch((err) => {
        console.warn("Using fallback celebrities list:", err.message);
      });
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Celebrities</h1>
          <p>Discover the actors and actresses behind your favorite films</p>
        </div>
      </section>

      <div className="container">
        <div className="cast-grid">
          {(celebrities || []).map((celebrity) => {
            const photoUrl = celebrity.profile_path
              ? `https://image.tmdb.org/t/p/w500/${celebrity.profile_path}`
              : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80";

            return (
              <div className="cast-card" key={celebrity.id}>
                <div className="cast-photo">
                  <img
                    src={photoUrl}
                    alt={celebrity.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80";
                    }}
                  />
                </div>

                <h4>{celebrity.name}</h4>

                <span className="character">
                  {celebrity.known_for_department || "Acting"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Celebrities;