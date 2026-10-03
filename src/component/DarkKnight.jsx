import React from "react";

function DarkKnight() {
const addToWatchlist = () => {

    const movie = {
      id: "dark-knight",
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    };

    let watchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    const alreadyAdded = watchlist.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {

      watchlist.push(movie);

      localStorage.setItem(
        "watchlist",
        JSON.stringify(watchlist)
      );

      alert("The Dark Knight added to Watchlist!");

    } else {

      alert("The Dark Knight is already in Watchlist!");

    }
}
  return (
    <>
      <main>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
          <div className="container detail-hero-inner">
            <div className="detail-poster">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                alt="The Dark Knight poster"
              />
            </div>
            <div className="detail-info">
              <p className="tagline">Why so serious?</p>
              <h1>The Dark Knight</h1>
              <div className="detail-meta">
                <span className="rating">
                  <i className="fa-solid fa-star"></i> 9.0 / 10
                </span>
                <span className="dot"></span>
                <span>2008</span>
                <span className="dot"></span>
                <span>2h 32m</span>
                <span className="dot"></span>
                <span>Director: Christopher Nolan</span>
              </div>
              <div className="genre-tags">
                <span className="genre-tag">Action</span>
                <span className="genre-tag">Crime</span>
                <span className="genre-tag">Drama</span>
              </div>
              <p className="detail-desc">
                With the help of Lieutenant Jim Gordon and District Attorney
                Harvey Dent, Batman sets out to dismantle the remaining criminal
                organizations that plague Gotham's streets. The partnership
                proves effective, but they soon find themselves prey to a rising
                criminal mastermind known as the Joker, who plunges Gotham into
                anarchy and forces Batman closer to crossing the fine line
                between hero and vigilante.
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
                <span className="value">Christopher Nolan</span>
              </div>
              <div className="info-item">
                <span className="label">Writers</span>
                <span className="value">
                  Jonathan Nolan, Christopher Nolan, David S. Goyer
                </span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">July 18, 2008</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">2h 32m</span>
              </div>
              <div className="info-item">
                <span className="label">Language</span>
                <span className="value">English, Mandarin</span>
              </div>
              <div className="info-item">
                <span className="label">Country</span>
                <span className="value">United States, United Kingdom</span>
              </div>
              <div className="info-item">
                <span className="label">Budget</span>
                <span className="value">$185 Million</span>
              </div>
              <div className="info-item">
                <span className="label">Box Office</span>
                <span className="value">$1.01 Billion</span>
              </div>
              <div className="info-item" style={{ borderBottom: "none" }}>
                <span className="label">Production Company</span>
                <span className="value">
                  Syncopy, Legendary Pictures, DC Comics
                </span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="overview">
            <h2>Overview</h2>
            <p className="synopsis">
              Gotham's fragile peace begins to unravel when a chaos-driven
              criminal calling himself the Joker emerges, robbing banks and
              orchestrating attacks that push the city's institutions to their
              breaking point. As Batman, Commissioner Gordon, and District
              Attorney Harvey Dent race to stop him, the Joker's true goal
              reveals itself: to prove that any man can be broken, and to
              corrupt the one symbol of hope Gotham has left.
            </p>
            <div className="overview-grid">
              <div className="info-item">
                <span className="label">Genres</span>
                <span className="value">Action, Crime, Drama</span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">Jul 18, 2008</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">2h 32m</span>
              </div>
              <div className="info-item">
                <span className="label">Languages</span>
                <span className="value">English, Mandarin</span>
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
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Diane Castellano</h4>
                    <span className="review-date">July 19, 2008</span>
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
                  Heath Ledger's Joker redefined what a comic-book villain could
                  be. This isn't a superhero movie, it's a crime epic that
                  happens to have one.
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
                    <h4>Marcus Fielding</h4>
                    <span className="review-date">July 21, 2008</span>
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
                  The interrogation scene between Batman and Joker is one of the
                  greatest two-hander sequences in blockbuster history.
                  Endlessly rewatchable.
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
                    <h4>Yuki Tanaka</h4>
                    <span className="review-date">August 1, 2008</span>
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
                  Two-Face's arc feels rushed compared to the Joker's, crammed
                  into the last act. Still, the moral-choice ferry sequence is
                  unforgettable.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Renee Kowalski</h4>
                    <span className="review-date">August 15, 2008</span>
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
                  Sixteen years on and this is still the benchmark every
                  comic-book film gets measured against. Zimmer and Howard's
                  score is unbearably tense.
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
                <i className="fa-solid fa-star filled"></i>
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
                <h4>Christian Bale</h4>
                <span className="character">Bruce Wayne / Batman</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Heath Ledger</h4>
                <span className="character">The Joker</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Aaron Eckhart</h4>
                <span className="character">Harvey Dent</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Maggie Gyllenhaal</h4>
                <span className="character">Rachel Dawes</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Gary Oldman</h4>
                <span className="character">James Gordon</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Michael Caine</h4>
                <span className="character">Alfred Pennyworth</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Morgan Freeman</h4>
                <span className="character">Lucius Fox</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Eric Roberts</h4>
                <span className="character">Sal Maroni</span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="media">
            <h2>Media</h2>
            <div className="media-grid">
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Gotham skyline still"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="City skyline at night"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Neon city street"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Dark alley neon"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="City bridge night"
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
                      <i className="fa-solid fa-star"></i> 8.4
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Joker poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Joker</h3>
                    <div className="card-meta">
                      <span>2019</span>
                      <span className="dot"></span>
                      <span>Crime</span>
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DarkKnight;
