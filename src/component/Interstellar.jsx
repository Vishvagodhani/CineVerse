import React from 'react'

function Interstellar() {

  const addToWatchlist = () => {

    const movie = {
      id: "interstellar",
      title: "Interstellar",
      year: "2014",
      rating: "8.7",
      genre: "Sci-Fi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10"
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

      alert("Interstellar added to Watchlist!");

    } else {

      alert("Interstellar is already in Watchlist!");

    }
  }
  return (
    <>
    <main>

  <section
  className="detail-hero"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=80')"
  }}
>
    <div className="container detail-hero-inner">
      <div className="detail-poster">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10" alt="Interstellar poster" />
      </div>
      <div className="detail-info">
        <p className="tagline">Mankind was born on Earth. It was never meant to die here.</p>
        <h1>Interstellar</h1>
        <div className="detail-meta">
          <span className="rating"><i className="fa-solid fa-star"></i> 8.7 / 10</span>
          <span className="dot"></span><span>2014</span>
          <span className="dot"></span><span>2h 49m</span>
          <span className="dot"></span><span>Director: Christopher Nolan</span>
        </div>
        <div className="genre-tags">
          <span className="genre-tag">Sci-Fi</span>
          <span className="genre-tag">Drama</span>
          <span className="genre-tag">Adventure</span>
        </div>
        <p className="detail-desc">With Earth's soil failing and dust storms choking out crops, a former NASA pilot named Cooper is recruited for a mission through a newly discovered wormhole near Saturn, searching for a habitable world among the stars while his daughter, Murph, races to solve the gravity equation that could save humanity back home.</p>
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
        <div className="info-item"><span className="label">Writers</span><span className="value">Jonathan Nolan, Christopher Nolan</span></div>
        <div className="info-item"><span className="label">Release Date</span><span className="value">November 7, 2014</span></div>
        <div className="info-item"><span className="label">Runtime</span><span className="value">2h 49m</span></div>
        <div className="info-item"><span className="label">Language</span><span className="value">English</span></div>
        <div className="info-item"><span className="label">Country</span><span className="value">United States, United Kingdom</span></div>
        <div className="info-item"><span className="label">Budget</span><span className="value">$165 Million</span></div>
        <div className="info-item"><span className="label">Box Office</span><span className="value">$758 Million</span></div>
        <div className="info-item" style={{ borderBottom: "none" }}>
  <span className="label">Production Company</span>
  <span className="value">
    Legendary Pictures, Syncopy, Lynda Obst Productions
  </span>
</div>
      </div>
    </section>

    <section className="detail-section" id="overview">
      <h2>Overview</h2>
      <p className="synopsis">In a near future where crop blight and dust storms threaten human survival, former test pilot Cooper stumbles onto a secret NASA facility and is pulled into humanity's last mission: pilot a crew through a wormhole in search of a new home among the stars. As relativistic time dilation strands him decades away from his children, Cooper must reconcile the mission's demands with a promise made to his daughter Murph — that he would return.</p>
      <div className="overview-grid">
        <div className="info-item"><span className="label">Genres</span><span className="value">Sci-Fi, Drama, Adventure</span></div>
        <div className="info-item"><span className="label">Release Date</span><span className="value">Nov 7, 2014</span></div>
        <div className="info-item"><span className="label">Runtime</span><span className="value">2h 49m</span></div>
        <div className="info-item"><span className="label">Languages</span><span className="value">English</span></div>
      </div>
    </section>

    <section className="detail-section" id="reviews">
      <h2>Reviews</h2>
      <div className="review-grid">
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Grace Halloran</h4><span className="review-date">November 10, 2014</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">Hans Zimmer's organ score and the docking sequence still give me chills a decade later. Emotionally the strongest film Nolan has made.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Tomas Riedel</h4><span className="review-date">November 18, 2014</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">The science is rigorous and the visuals of the black hole hold up remarkably well. The third act gets a little tangled explaining itself.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Naomi Ferris</h4><span className="review-date">December 2, 2014</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">A love letter to exploration disguised as hard sci-fi. McConaughey's performance in the video-message scene is devastating.</p>
        </article>
        <article className="review-card">
          <div className="review-head">
            <div className="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Reviewer avatar" /></div>
            <div className="review-who"><h4>Ben Okonkwo</h4><span className="review-date">January 5, 2015</span>
              <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star-half-stroke"></i><i className="fa-regular fa-star"></i></div>
            </div>
          </div>
          <p className="review-text">Ambitious to a fault — TARS is a great character but the tesseract sequence tips from awe into overexplanation for me.</p>
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
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Matthew McConaughey</h4><span className="character">Cooper</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Anne Hathaway</h4><span className="character">Dr. Amelia Brand</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Jessica Chastain</h4><span className="character">Murph (adult)</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Michael Caine</h4><span className="character">Professor Brand</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Matt Damon</h4><span className="character">Dr. Mann</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Mackenzie Foy</h4><span className="character">Murph (young)</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Wes Bentley</h4><span className="character">Doyle</span></div>
        <div className="cast-card"><div className="cast-photo"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&h=300&q=80" alt="Actor" /></div><h4>Casey Affleck</h4><span className="character">Tom Cooper</span></div>
      </div>
    </section>

    <section className="detail-section" id="media">
      <h2>Media</h2>
      <div className="media-grid">
        <div className="media-item"><img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&h=800&q=80" alt="Galaxy still" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=500&h=400&q=80" alt="Starry sky" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&h=400&q=80" alt="Earth from space" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=500&h=400&q=80" alt="Nebula" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
        <div className="media-item"><img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=500&h=400&q=80" alt="Deep space galaxy" /><div className="media-overlay"><i className="fa-solid fa-expand"></i></div></div>
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
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 8.6</span><img src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&h=600&q=80" alt="Dune: Part Two poster" /></div>
            <div className="card-body"><h3>Dune: Part Two</h3><div className="card-meta"><span>2024</span><span className="dot"></span><span>Sci-Fi</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="oppenheimer.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 8.6</span><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&h=600&q=80" alt="Oppenheimer poster" /></div>
            <div className="card-body"><h3>Oppenheimer</h3><div className="card-meta"><span>2023</span><span className="dot"></span><span>Drama</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="dark-knight.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 9.0</span><img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&h=600&q=80" alt="The Dark Knight poster" /></div>
            <div className="card-body"><h3>The Dark Knight</h3><div className="card-meta"><span>2008</span><span className="dot"></span><span>Action</span></div></div>
          </a>
        </article>
        <article className="movie-card">
          <a href="avatar.html" className="card-link">
            <div className="poster-wrap"><span className="rating-chip"><i className="fa-solid fa-star"></i> 7.6</span><img src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=400&h=600&q=80" alt="Avatar: The Way of Water poster" /></div>
            <div className="card-body"><h3>Avatar: The Way of Water</h3><div className="card-meta"><span>2022</span><span className="dot"></span><span>Sci-Fi</span></div></div>
          </a>
        </article>
      </div>
    </section>
  </div>

</main>
    </>
  )
}

export default Interstellar