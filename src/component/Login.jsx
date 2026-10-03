import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/auth'
import '../../css/Login.css'

function Login() {
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { logIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Destination path if redirected by ProtectedRoute
  const destination = location.state?.from?.pathname || '/Content'
  const redirectedNotice = location.state?.from ? 'Please sign in to access that page.' : ''

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const form = new FormData(event.currentTarget)
    const result = await logIn({
      email: form.get('email'),
      password: form.get('password'),
    })
    setIsSubmitting(false)

    if (!result.ok) {
      setError(result.message)
      return
    }

    navigate(destination, { replace: true })
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <i className="fa-solid fa-clapperboard"></i>
          <span className="logo-cine">Cine</span>
          <span className="logo-verse">Verse</span>
        </div>
        <h2>Welcome Back</h2>

        {redirectedNotice && !error && (
          <p
            className="auth-message"
            style={{
              background: 'rgba(245, 197, 24, 0.15)',
              border: '1px solid rgba(245, 197, 24, 0.4)',
              color: '#f5c518',
              borderRadius: '6px',
              padding: '10px 14px',
              marginBottom: '16px',
              fontSize: '0.88rem',
            }}
          >
            <i className="fa-solid fa-lock" style={{ marginRight: '6px' }}></i>
            {redirectedNotice}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="form-row">
            <label className="checkbox-row">
              <input type="checkbox" name="remember" />
              Remember Me
            </label>
            <a
              href="mailto:support@cineverse.local?subject=Password%20reset"
              className="forgot-link"
            >
              Forgot Password?
            </a>
          </div>
          {error && (
            <p className="auth-message auth-message-error" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging In…' : 'Log In'}
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
