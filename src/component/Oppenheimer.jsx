import React from 'react'

function Oppenheimer() {
  

  const addToWatchlist = () => {

    const movie = {
      id: "oppenheimer",
      title: "Oppenheimer",
      year: "2023",
      rating: "8.6",
      genre: "Biography",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4Zeq_zJTfuRQBJCseEb452zNAkSnKyefmZZulw0egQ&s=10"
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

      alert("Oppenheimer added to Watchlist!");

    } else {

      alert("Oppenheimer is already in Watchlist!");

    }
  }
  return (
    <>
    <main>

  <section
  className="detail-hero"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=80')"
  }}
>
    <div className="container detail-hero-inner">
      <div className="detail-poster">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4Zeq_zJTfuRQBJCseEb452zNAkSnKyefmZZulw0egQ&s=10" alt="Oppenheimer poster" />
      </div>
      <div className="detail-info">
        <p className="tagline">The world forever changes.</p>
        <h1>Oppenheimer</h1>
        <div className="detail-meta">
          <span className="rating"><i className="fa-solid fa-star"></i> 8.6 / 10</span>
          <span className="dot"></span><span>2023</span>
          <span className="dot"></span><span>3h 0m</span>
          <span className="dot"></span><span>Director: Christopher Nolan</span>
        </div>
        <div className="genre-tags">
          <span className="genre-tag">Biography</span>
          <span className="genre-tag">Drama</span>
          <span className="genre-tag">History</span>
        </div>
        <p className="detail-desc">The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II. Told across three timelines — his rise as a theoretical physicist, the race to build the bomb at Los Alamos, and the postwar security hearing that stripped him of his clearance — the film traces a mind that changed history and was consumed by what it unleashed.</p>
        <div className="detail-actions">
          <a href="#reviews" className="btn btn-primary"><i className="fa-solid fa-star"></i> Rate This Movie</a>
          <button
  className="btn btn-ghost"
  onClick={addToWatchlist}
>
  <i className="fa-regular fa-heart"></i>
  Add to Favorite
</button>
          <a href="#" className="btn btn-ghost"><i className="fa-solid fa-share-nodes"></i> Share</a>
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
        <div className="info-item"><span className="label">Director</span><span className="value">Christopher Nolan</span></div>
        <div className="info-item"><span className="label">Writers</span><span className="value">Christopher Nolan, Kai Bird, Martin J. Sherwin</span></div>
        <div className="info-item"><span className="label">Release Date</span><span className="value">July 21, 2023</span></div>
        <div className="info-item"><span className="label">Runtime</span><span className="value">3h 0m</span></div>
        <div className="info-item"><span className="label">Language</span><span className="value">English</span></div>
        <div className="info-item"><span className="label">Country</span><span className="value">United States, United Kingdom</span></div>
        <div className="info-item"><span className="label">Budget</span><span className="value">$100 Million</span></div>
        <div className="info-item"><span className="label">Box Office</span><span className="value">$976 Million</span></div>
        <div className="info-item" style={{ borderBottom: "none" }}>
  <span className="label">Production Company</span>
  <span className="value">Syncopy, Atlas Entertainment</span>
</div>
      </div>
    </section>

    <section className="detail-section" id="overview">
      <h2>Overview</h2>
      <p className="synopsis"><strong>Oppenheimer</strong> chronicles the life of theoretical physicist J. Robert Oppenheimer, from his formative years studying quantum mechanics in Europe to his leadership of the Manhattan Project at Los Alamos, where he directed the team that built the first atomic bomb. The film interweaves his triumph at Trinity with the political persecution he faced during the Red Scare, framing the story as a meditation on genius, guilt, and the terrible weight of unleashing a weapon that could end the world.</p>
      <div className="overview-grid">
        <div className="info-item"><span className="label">Genres</span><span className="value">Biography, Drama, History</span></div>
        <div className="info-item"><span className="label">Release Date</span><span className="value">Jul 21, 2023</span></div>
        <div className="info-item"><span className="label">Runtime</span><span className="value">3h 0m</span></div>
        <div className="info-item"><span className="label">Languages</span><span className="value">English</span></div>
      </div>
    </section>

    <section className="detail-section" id="reviews">
      <h2>Reviews</h2>
      <div className="review-grid">
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Harold Vance</h4><span className="review-date">July 22, 2023</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">Murphy's performance is a masterclassName in controlled dread. The Trinity test sequence is the most tense fifteen minutes of Nolan's career.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Elena Voss</h4><span className="review-date">July 25, 2023</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star-half-stroke"></i></div>
            </div>
          </div>
          <p className="review-text">Dense with dialogue and courtroom maneuvering — demands full attention, but rewards it with one of the year's smartest scripts.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Rajiv Nair</h4><span className="review-date">August 3, 2023</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">Downey Jr. as Strauss is the film's quiet weapon — a career-best supporting turn. The sound design alone deserves the awards buzz.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Cassandra Blythe</h4><span className="review-date">August 10, 2023</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">Formally impressive but emotionally cold. Three hours of moral hand-wringing that never quite lets you inside Oppenheimer's head.</p>
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
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Cillian Murphy</h4><span className="character">J. Robert Oppenheimer</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Emily Blunt</h4><span className="character">Kitty Oppenheimer</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Robert Downey Jr.</h4><span className="character">Lewis Strauss</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Matt Damon</h4><span className="character">Leslie Groves</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Florence Pugh</h4><span className="character">Jean Tatlock</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Josh Hartnett</h4><span className="character">Ernest Lawrence</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Rami Malek</h4><span className="character">David Hill</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Kenneth Branagh</h4><span className="character">Niels Bohr</span></div>
      </div>
    </section>

    <section className="detail-section" id="media">
      <h2>Media</h2>
      <div className="media-grid">
        <div className="media-item"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&h=800&q=80" alt="Explosion still" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=500&h=400&q=80" alt="Vintage camera and film" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&h=400&q=80" alt="Desert test site" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=400&q=80" alt="Chalkboard equations" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=500&h=400&q=80" alt="New Mexico desert" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
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
          <a href="dark-knight.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 9.0</span><img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&h=600&q=80" alt="The Dark Knight poster" /></div>
            <div className="card-body"><h3>The Dark Knight</h3><div className="card-meta"><span>2008</span><span className="dot"></span><span>Action</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="interstellar.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 8.7</span><img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&h=600&q=80" alt="Interstellar poster" /></div>
            <div className="card-body"><h3>Interstellar</h3><div className="card-meta"><span>2014</span><span className="dot"></span><span>Sci-Fi</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="dune.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 8.6</span><img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&h=600&q=80" alt="Dune: Part Two poster" /></div>
            <div className="card-body"><h3>Dune: Part Two</h3><div className="card-meta"><span>2024</span><span className="dot"></span><span>Sci-Fi</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="movies.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 9.2</span><img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&h=600&q=80" alt="The Godfather poster" /></div>
            <div className="card-body"><h3>The Godfather</h3><div className="card-meta"><span>1972</span><span className="dot"></span><span>Drama</span></div></div>
          </a>
        </article>
      </div>
    </section>
  </div>

</main>
    </>
  )
}

export default Oppenheimer