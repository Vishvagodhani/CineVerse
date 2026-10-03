import React from "react";
import "../../css/Avatar.css";
function Avatar() {

  const addToWatchlist = () => {
  const movie = {
    id: "avatar",
    title: "Avatar: The Way of Water",
    year: "2022",
    rating: "7.6",
    genre: "Sci-Fi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vo09n6GL62313i01zXnKpGM1G2Z_4in1jVhOuQoNym-KW08NovAYPk8&s=10"
  };

  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const alreadyAdded = watchlist.some(
    (item) => item.id === movie.id
  );

  if (!alreadyAdded) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  alert("Avatar added to Watchlist!");
};
  return (
    <>
      <main>
        <section className="detail-hero avatar-hero">
          <div className="container detail-hero-inner">
            <div className="detail-poster">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vo09n6GL62313i01zXnKpGM1G2Z_4in1jVhOuQoNym-KW08NovAYPk8&s=10"
                alt="Avatar: The Way of Water poster"
              />
            </div>
            <div className="detail-info">
              <p className="tagline">Return to Pandora.</p>
              <h1>Avatar: The Way of Water</h1>
              <div className="detail-meta">
                <span className="rating">
                  <i className="fa-solid fa-star"></i> 7.6 / 10
                </span>
                <span className="dot"></span>
                <span>2022</span>
                <span className="dot"></span>
                <span>3h 12m</span>
                <span className="dot"></span>
                <span>Director: James Cameron</span>
              </div>
              <div className="genre-tags">
                <span className="genre-tag">Sci-Fi</span>
                <span className="genre-tag">Adventure</span>
                <span className="genre-tag">Fantasy</span>
              </div>
              <p className="detail-desc">
                Jake Sully lives with his newfound family on the moon of
                Pandora. Once a familiar threat returns to finish what was
                previously started, Jake must work with Neytiri and the army of
                the Na'vi race to protect their home, forcing the Sully family
                to journey to the reefs of the Metkayina clan to find sanctuary
                among the ocean's people.
              </p>
              <div className="detail-actions">
                <a href="#reviews" className="btn btn-primary">
                  <i className="fa-solid fa-star"></i> Rate This Movie
                </a>
                <button
  className="btn btn-ghost"
  onClick={addToWatchlist}
>
  <i className="fa-regular fa-heart"></i>
  Add to Favorite
</button>
                <a href="#" className="btn btn-ghost">
                  <i className="fa-solid fa-share-nodes"></i> Share
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav className="detail-tabs">
          <div className="container">
            <a href="#overview">Overview</a>
            <a href="#reviews">Reviews</a>
            <a href="#cast">Cast &amp; Crew</a>
            <a href="#media">Media</a>
            <a href="#moviesrelated">Related Movies</a>
          </div>
        </nav>

        <div className="container">
          <section className="detail-section" style={{ paddingTop: "60px" }}>
            <div className="info-panel">
              <div className="info-item">
                <span className="label">Director</span>
                <span className="value">James Cameron</span>
              </div>
              <div className="info-item">
                <span className="label">Writers</span>
                <span className="value">
                  James Cameron, Rick Jaffa, Amanda Silver
                </span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">December 16, 2022</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">3h 12m</span>
              </div>
              <div className="info-item">
                <span className="label">Language</span>
                <span className="value">English</span>
              </div>
              <div className="info-item">
                <span className="label">Country</span>
                <span className="value">United States</span>
              </div>
              <div className="info-item">
                <span className="label">Budget</span>
                <span className="value">$460 Million</span>
              </div>
              <div className="info-item">
                <span className="label">Box Office</span>
                <span className="value">$2.32 Billion</span>
              </div>
              <div className="info-item" style={{ borderBottom: "none" }}>
                <span className="label">Production Company</span>
                <span className="value">
                  Lightstorm Entertainment, 20th Century Studios
                </span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="overview">
            <h2>Overview</h2>
            <p className="synopsis">
              Set more than a decade after the events of the first film,{" "}
              <strong>Avatar: The Way of Water</strong> begins to tell the story
              of the Sully family — the trouble that follows them, the lengths
              they go to keep each other safe, the battles they fight to stay
              alive, and the tragedies they endure. When an ancient threat
              resurfaces on Pandora, Jake and Neytiri lead their children into
              exile among the reef-dwelling Metkayina clan, where they must
              learn the ways of the water to survive a war that has followed
              them across the world.
            </p>
            <div className="overview-grid">
              <div className="info-item">
                <span className="label">Genres</span>
                <span className="value">Sci-Fi, Adventure, Fantasy</span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">Dec 16, 2022</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">3h 12m</span>
              </div>
              <div className="info-item">
                <span className="label">Languages</span>
                <span className="value">English</span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="reviews">
            <h2>Reviews</h2>
            <div className="review-grid">
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Marcus Ellery</h4>
                    <span className="review-date">January 4, 2023</span>
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
                  The underwater sequences are a genuine leap forward for the
                  medium. The story is thin in places, but as a pure sensory
                  experience it's hard to top.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Priya Anand</h4>
                    <span className="review-date">December 20, 2022</span>
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
                  Cameron builds a world you can feel. The family drama at the
                  center gives the spectacle real emotional weight this time
                  around.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Daniel Okafor</h4>
                    <span className="review-date">December 28, 2022</span>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
                <p className="review-text">
                  Overlong, but the final hour is some of the best large-scale
                  action filmmaking of the decade. Worth the wait.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Sofia Reyes</h4>
                    <span className="review-date">January 12, 2023</span>
                    <div className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="review-text">
                  Visually stunning but the plot recycles a lot of beats from
                  the first film. Beautiful to look at, less so to think about
                  afterward.
                </p>
              </article>
            </div>

            <div className="rate-widget">
              <h4>Rate This Movie</h4>
              <div className="star-row" aria-label="5 out of 5 stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </section>

          <section className="detail-section" id="cast">
            <h2>Cast &amp; Crew</h2>
            <div className="cast-grid">
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Sam Worthington</h4>
                <span className="character">Jake Sully</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Zoe Saldaña</h4>
                <span className="character">Neytiri</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Sigourney Weaver</h4>
                <span className="character">Kiri</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Stephen Lang</h4>
                <span className="character">Col. Quaritch</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Kate Winslet</h4>
                <span className="character">Ronal</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Cliff Curtis</h4>
                <span className="character">Tonowari</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Britain Dalton</h4>
                <span className="character">Lo'ak</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Jamie Flatters</h4>
                <span className="character">Neteyam</span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="media">
            <h2>Media</h2>
            <div className="media-grid">
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Ocean reef still"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Underwater scene"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Coral reef backdrop"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Ocean waves"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Bioluminescent water"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </section>

          <section
            className="detail-section"
            id="moviesrelated"
            style={{ borderBottom: "none" }}
          >
            <h2>Related Movies</h2>
            <div className="related-grid">
              <article className="movie-card">
                <a href="dune.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 8.6
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Dune: Part Two poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Dune: Part Two</h3>
                    <div className="card-meta">
                      <span>2024</span>
                      <span className="dot"></span>
                      <span>Sci-Fi</span>
                    </div>
                  </div>
                </a>
              </article>
              <article className="movie-card">
                <a href="interstellar.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 8.7
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Interstellar poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Interstellar</h3>
                    <div className="card-meta">
                      <span>2014</span>
                      <span className="dot"></span>
                      <span>Sci-Fi</span>
                    </div>
                  </div>
                </a>
              </article>
              <article className="movie-card">
                <a href="oppenheimer.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 8.6
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Oppenheimer poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Oppenheimer</h3>
                    <div className="card-meta">
                      <span>2023</span>
                      <span className="dot"></span>
                      <span>Drama</span>
                    </div>
                  </div>
                </a>
              </article>
              <article className="movie-card">
                <a href="movies.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 8.3
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Top Gun: Maverick poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Top Gun: Maverick</h3>
                    <div className="card-meta">
                      <span>2022</span>
                      <span className="dot"></span>
                      <span>Action</span>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Avatar;
