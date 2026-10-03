import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

function Header() {
  const { user, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          <i className="fa-solid fa-clapperboard"></i>
          Cine<span>Verse</span>
        </Link>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <nav className="nav-links">
          {user ? (
            <>
              <Link to="/Content">Home</Link>
              <Link to="/Movies">Movies</Link>
              <Link to="/Celebrities">Celebrities</Link>
              <Link to="/Community">Community</Link>
            </>
          ) : (
            <>
              <a href="/#preview">Catalog Preview</a>
              <a href="/#features">Features</a>
              <a href="/#faq">FAQ</a>
              <Link to="/Help">Help Center</Link>
            </>
          )}
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/Watchlist" className="nav-icon-link">
                <i className="fa-regular fa-bookmark"></i>
                <span>Watchlist</span>
              </Link>
              <Link to="/Help" className="nav-icon-link">
                <i className="fa-regular fa-circle-question"></i>
                <span>Help</span>
              </Link>
              <span className="nav-divider"></span>
              <span className="nav-user" title={user.email}>
                Hi, {user.name}
              </span>
              <button type="button" className="nav-login" onClick={handleLogOut}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/Login" className="nav-login">
                Log In
              </Link>
              <Link to="/Signup" className="btn btn-primary nav-cta">
                Get Started
              </Link>
            </>
          )}
        </div>

        <label htmlFor="nav-toggle" className="nav-burger" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  )
}

export default Header
