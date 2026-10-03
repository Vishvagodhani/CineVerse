import React from "react";

function Dune() {
  const addToWatchlist = () => {

    const movie = {
      id: "dune-part-two",
      title: "Dune: Part Two",
      year: "2024",
      rating: "8.6",
      genre: "Sci-Fi",
      image:
        "https://m.media-amazon.com/images/I/61tJY4EWDpL._AC_UF1000,1000_QL80_.jpg"
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

      alert("Dune: Part Two added to Watchlist!");

    } else {

      alert("Dune: Part Two is already in Watchlist!");

    }
  }
  return (
    <>
      <main>
        <section
          className="detail-hero"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
          <div className="container detail-hero-inner">
            <div className="detail-poster">
              <img
                src="https://m.media-amazon.com/images/I/61tJY4EWDpL._AC_UF1000,1000_QL80_.jpg"
                alt="Dune: Part Two poster"
              />
            </div>
            <div className="detail-info">
              <p className="tagline">Long live the fighters.</p>
              <h1>Dune: Part Two</h1>
              <div className="detail-meta">
                <span className="rating">
                  <i className="fa-solid fa-star"></i> 8.6 / 10
                </span>
                <span className="dot"></span>
                <span>2024</span>
                <span className="dot"></span>
                <span>2h 46m</span>
                <span className="dot"></span>
                <span>Director: Denis Villeneuve</span>
              </div>
              <div className="genre-tags">
                <span className="genre-tag">Sci-Fi</span>
                <span className="genre-tag">Adventure</span>
                <span className="genre-tag">Drama</span>
              </div>
              <p className="detail-desc">
                Paul Atreides unites with Chani and the Fremen while on a
                warpath of revenge against the conspirators who destroyed his
                family. Facing a choice between the love of his life and the
                fate of the known universe, Paul endeavors to prevent a terrible
                future only he can foresee.
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
                <span className="value">Denis Villeneuve</span>
              </div>
              <div className="info-item">
                <span className="label">Writers</span>
                <span className="value">
                  Denis Villeneuve, Jon Spaihts, Frank Herbert
                </span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">March 1, 2024</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">2h 46m</span>
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
                <span className="value">$190 Million</span>
              </div>
              <div className="info-item">
                <span className="label">Box Office</span>
                <span className="value">$714 Million</span>
              </div>
             <div className="info-item" style={{ borderBottom: "none" }}>
                <span className="label">Production Company</span>
                <span className="value">
                  Legendary Pictures, Warner Bros. Pictures
                </span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="overview">
            <h2>Overview</h2>
            <p className="synopsis">
              <strong>Dune: Part Two</strong> follows Paul Atreides as he embeds
              himself among the Fremen of Arrakis, training as a warrior under
              Stilgar and falling deeper for Chani while resisting the messianic
              destiny others are determined to press onto him. As House
              Harkonnen tightens its grip on the desert planet's spice
              production, Paul must decide whether to embrace the prophecy that
              could unite the Fremen — and unleash a holy war that could consume
              the galaxy.
            </p>
            <div className="overview-grid">
              <div className="info-item">
                <span className="label">Genres</span>
                <span className="value">Sci-Fi, Adventure, Drama</span>
              </div>
              <div className="info-item">
                <span className="label">Release Date</span>
                <span className="value">Mar 1, 2024</span>
              </div>
              <div className="info-item">
                <span className="label">Runtime</span>
                <span className="value">2h 46m</span>
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
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Wesley Cho</h4>
                    <span className="review-date">March 3, 2024</span>
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
                  A rare sequel that surpasses its predecessor. The sandworm
                  sequences and the Fremen culture feel genuinely lived-in
                  rather than exposition-heavy.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Amara Osei</h4>
                    <span className="review-date">March 8, 2024</span>
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
                  Villeneuve's scale is unmatched right now. Zendaya and
                  Chalamet carry the emotional core while the production design
                  does the rest.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Ian Fitzgerald</h4>
                    <span className="review-date">March 15, 2024</span>
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
                  The black-and-white Giedi Prime sequence alone is worth the
                  ticket. A few pacing lulls in the middle act, but the finale
                  delivers.
                </p>
              </article>
              <article className="review-card">
                <div className="review-head">
                  <div className="avatar">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Reviewer avatar"
                    />
                  </div>
                  <div className="review-who">
                    <h4>Lucia Marquez</h4>
                    <span className="review-date">March 20, 2024</span>
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
                  Austin Butler's Feyd-Rautha is terrifying in the best way.
                  This is blockbuster filmmaking with real craft behind every
                  frame.
                </p>
              </article>
            </div>

            <div className="rate-widget">
              <h4>Rate This Movie</h4>
              <div className="star-row" aria-label="4.5 out of 5 stars">
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star filled"></i>
                <i className="fa-solid fa-star-half-stroke filled"></i>
              </div>
            </div>
          </section>

          <section className="detail-section" id="cast">
            <h2>Cast &amp; Crew</h2>
            <div className="cast-grid">
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Timothée Chalamet</h4>
                <span className="character">Paul Atreides</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Zendaya</h4>
                <span className="character">Chani</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Rebecca Ferguson</h4>
                <span className="character">Lady Jessica</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Javier Bardem</h4>
                <span className="character">Stilgar</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Austin Butler</h4>
                <span className="character">Feyd-Rautha</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Florence Pugh</h4>
                <span className="character">Princess Irulan</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Josh Brolin</h4>
                <span className="character">Gurney Halleck</span>
              </div>
              <div className="cast-card">
                <div className="cast-photo">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Actor"
                  />
                </div>
                <h4>Christopher Walken</h4>
                <span className="character">Emperor Shaddam IV</span>
              </div>
            </div>
          </section>

          <section className="detail-section" id="media">
            <h2>Media</h2>
            <div className="media-grid">
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Desert dunes still"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Desert landscape"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1500332065961-9812a8c99c1c?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Sand dunes at dusk"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1547235024-b4dcd6b3b2a5?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Golden desert"
                />
                <div className="media-overlay">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
              <div className="media-item">
                <img
                  src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=500&h=400&q=80"
                  alt="Desert horizon"
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
                <a href="avatar.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 7.6
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="Avatar: The Way of Water poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>Avatar: The Way of Water</h3>
                    <div className="card-meta">
                      <span>2022</span>
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
                <a href="dark-knight.html" className="card-link">
                  <div className="poster-wrap">
                    <span className="rating-chip">
                      <i className="fa-solid fa-star"></i> 9.0
                    </span>
                    <img
                      src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&h=600&q=80"
                      alt="The Dark Knight poster"
                    />
                  </div>
                  <div className="card-body">
                    <h3>The Dark Knight</h3>
                    <div className="card-meta">
                      <span>2008</span>
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

export default Dune;
