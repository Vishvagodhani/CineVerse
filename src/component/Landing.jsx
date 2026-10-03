import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Landing.css';

const PREVIEW_MOVIES = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    rating: '8.6',
    year: '2024',
  },
  {
    id: 872585,
    title: 'Oppenheimer',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    rating: '8.6',
    year: '2023',
  },
  {
    id: 157336,
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    rating: '8.7',
    year: '2014',
  },
  {
    id: 76600,
    title: 'Avatar: The Way of Water',
    poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    rating: '7.6',
    year: '2022',
  },
  {
    id: 155,
    title: 'The Dark Knight',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: '9.0',
    year: '2008',
  },
  {
    id: 361743,
    title: 'Top Gun: Maverick',
    poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    rating: '8.3',
    year: '2022',
  },
];

const FAQS = [
  {
    q: 'What is CineVerse?',
    a: 'CineVerse is a modern cinema portal where movie lovers discover trending releases, explore in-depth cast and crew filmographies, curate personal watchlists, and connect with other film enthusiasts.',
  },
  {
    q: 'Do I need to pay for an account?',
    a: 'No! CineVerse is completely free. Simply create an account with your email to unlock all features, trailers, discussions, and full movie details.',
  },
  {
    q: 'Why do I need to log in to view the movie catalog?',
    a: 'Logging in allows us to preserve your personalized watchlist, sync your ratings, remember your viewing preferences, and let you participate in community discussions and reviews.',
  },
  {
    q: 'Where does CineVerse get its movie data?',
    a: 'Our movie catalog, posters, ratings, cast credits, and release details are powered by The Movie Database (TMDb) API, updated continuously with the latest cinema releases worldwide.',
  },
  {
    q: 'How does the Watchlist feature work?',
    a: 'Once logged in, click "Add to Watchlist" on any movie card or detail page. Your saved movies are securely stored and accessible anytime from your personal Watchlist tab.',
  },
];

function Landing() {
  const [email, setEmail] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email.trim()) {
      navigate(`/Signup?email=${encodeURIComponent(email.trim())}`);
    } else {
      navigate('/Signup');
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="landing-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="landing-hero"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s520frq.jpg')",
        }}
      >
        <div className="landing-hero-content">
          <div className="landing-badge">
            <i className="fa-solid fa-sparkles"></i> The Premier Cinema Portal
          </div>

          <h1 className="landing-title">
            Unlimited Cinema. <span>Deep Lore.</span> Pure Magic.
          </h1>

          <p className="landing-subtitle">
            Explore thousands of curated blockbusters, deep cast profiles, and
            timeless masterpieces. Sign in to unlock full access to the universe
            of film.
          </p>

          <div className="landing-cta-box">
            <form className="landing-form" onSubmit={handleGetStarted}>
              <input
                type="email"
                className="landing-input"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="landing-btn-cta">
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            <div className="landing-guarantee">
              <span>
                <i className="fa-solid fa-circle-check"></i> Free Instant Access
              </span>
              <span>
                <i className="fa-solid fa-circle-check"></i> No Credit Card Required
              </span>
              <span>
                <i className="fa-solid fa-circle-check"></i> 10,000+ Movies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREVIEW SHOWCASE WITH LOCK OVERLAY ================= */}
      <section className="landing-preview" id="preview">
        <div className="container">
          <div className="landing-section-header">
            <span className="eyebrow">Catalog Preview</span>
            <h2>What's Waiting For You</h2>
            <p>
              From critically acclaimed masterpieces to trending international
              hits, here is a glimpse of what members explore inside.
            </p>
          </div>

          <div className="landing-grid-container">
            <div className="landing-movie-reel">
              {PREVIEW_MOVIES.map((movie) => (
                <div className="landing-movie-thumb" key={movie.id}>
                  <img src={movie.poster} alt={movie.title} />
                  <div className="landing-movie-meta-overlay">
                    <h4>{movie.title}</h4>
                    <span>
                      <i className="fa-solid fa-star"></i> {movie.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lock / Membership Gate Overlay */}
            <div className="landing-lock-overlay">
              <div className="landing-lock-icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <h3>Member-Only Experience</h3>
              <p>
                Sign in to view full movie details, trailers, cast interviews,
                ratings, and save titles to your personal watchlist.
              </p>
              <div className="landing-lock-actions">
                <Link to="/Signup" className="btn btn-primary">
                  <i className="fa-solid fa-user-plus"></i> Create Free Account
                </Link>
                <Link to="/Login" className="btn btn-ghost">
                  <i className="fa-solid fa-right-to-bracket"></i> Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE PILLARS / FEATURES ================= */}
      <section className="landing-features" id="features">
        <div className="container">
          <div className="landing-section-header">
            <span className="eyebrow">Why CineVerse</span>
            <h2>Engineered For Film Lovers</h2>
            <p>
              Designed from the ground up for movie lovers, casual viewers, and
              cinema connoisseurs alike.
            </p>
          </div>

          <div className="landing-feature-grid">
            <div className="landing-feature-card">
              <div className="landing-feature-icon">
                <i className="fa-solid fa-film"></i>
              </div>
              <h3>Curated Catalogs</h3>
              <p>
                Browse trending, popular, top-rated, and upcoming cinema
                releases hand-picked and refreshed regularly from global databases.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">
                <i className="fa-solid fa-masks-theater"></i>
              </div>
              <h3>In-Depth Cast & Lore</h3>
              <p>
                Discover the actors, directors, writers, and crew behind every
                masterpiece with rich biographies and complete filmographies.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">
                <i className="fa-solid fa-bookmark"></i>
              </div>
              <h3>Smart Watchlists</h3>
              <p>
                Save films you want to watch with one tap. Access your queue
                anytime, anywhere, on desktop, tablet, or mobile.
              </p>
            </div>

            <div className="landing-feature-card">
              <div className="landing-feature-icon">
                <i className="fa-solid fa-comments"></i>
              </div>
              <h3>Film Fan Community</h3>
              <p>
                Share your cinematic thoughts, debate award contenders, review
                recent releases, and exchange recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="landing-faq" id="faq">
        <div className="container">
          <div className="landing-section-header">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about CineVerse before joining.</p>
          </div>

          <div className="landing-faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  className={`landing-faq-item ${isOpen ? 'active' : ''}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="landing-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  {isOpen && (
                    <div className="landing-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="landing-final-cta">
        <div className="container">
          <div className="landing-final-card">
            <h2>Ready to Explore Cinema?</h2>
            <p>
              Join CineVerse today. Create your account in seconds and unlock
              unlimited movie discovery, trailers, and personal watchlists.
            </p>
            <Link to="/Signup" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <i className="fa-solid fa-clapperboard"></i> Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;
