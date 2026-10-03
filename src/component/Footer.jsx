import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <a href="index.html" className="brand"><i className="fa-solid fa-clapperboard"></i>Cine<span>Verse</span></a>
        <p>Your premium destination htmlFor movie discovery — trending titles, in-depth reviews, cast details and curated recommendations, all in one cinematic experience.</p>
        <div className="social-row">
          <a href="#facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#instagram" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#twitter" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#youtube" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-col">
        <h4>CineVerse</h4>
        <ul>
          <li><a href="#about">About CineVerse</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="movies.html">Movies</a></li>
          <li><a href="#celebrities">Celebrities</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#watchlist">Watchlist</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="#help">Help Center</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2026 CineVerse. All rights reserved.</span>
      <span><a href="#privacy">Privacy</a> · <a href="#terms">Terms</a> · <a href="#cookies">Cookies</a></span>
    </div>
  </div>
</footer>
  )
}

export default Footer