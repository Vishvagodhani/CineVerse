import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/auth'
import '../../css/Signup.css'

function Signup() {
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const initialEmail = searchParams.get('email') || ''

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    const form = new FormData(event.currentTarget)
    const password = form.get('password')

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }
    if (password !== form.get('confirm_password')) {
      setError('Passwords do not match.')
      return
    }

    setIsSubmitting(true)
    const result = await signUp({
      name: form.get('fullname'),
      email: form.get('email'),
      password,
    })
    setIsSubmitting(false)
    if (!result.ok) {
      setError(result.message)
      return
    }
    navigate('/Content')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <i className="fa-solid fa-clapperboard" style={{ color: '#e50914', marginRight: '6px' }}></i>
          <span className="logo-cine">Cine</span>
          <span className="logo-verse">Verse</span>
        </div>
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              placeholder="you@example.com"
              defaultValue={initialEmail}
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              placeholder="Create a password (min 8 chars)"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm_password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
          <label className="terms-row">
            <input type="checkbox" name="terms" required />
            <span>
              I agree to the <a href="#terms">Terms &amp; Conditions</a> and{' '}
              <a href="#privacy">Privacy Policy</a>
            </span>
          </label>
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
            {isSubmitting ? 'Creating Account…' : 'Sign Up'}
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/Login">Log In</Link>
        </p>
      </div>
    </section>
  )
}

export default Signup
