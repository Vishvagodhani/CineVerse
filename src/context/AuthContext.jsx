import { useState } from 'react'
import { AuthContext } from './auth'

const USERS_KEY = 'cineverse.users'
const SESSION_KEY = 'cineverse.session'

function readUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
    return Array.isArray(users) ? users : []
  } catch {
    return []
  }
}

function readSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
    return session?.email && session?.name ? session : null
  } catch {
    return null
  }
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password)
  const hash = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession)

  const signUp = async ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const users = readUsers()
    if (users.some((account) => account.email === normalizedEmail)) {
      return { ok: false, message: 'An account already exists for this email address.' }
    }

    const account = { name: name.trim(), email: normalizedEmail, passwordHash: await hashPassword(password) }
    const session = { name: account.name, email: account.email }
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify([...users, account]))
      localStorage.setItem(SESSION_KEY, JSON.stringify(session))
      setUser(session)
      return { ok: true }
    } catch {
      return { ok: false, message: 'Your browser could not save the account. Please check its storage settings.' }
    }
  }

  const logIn = async ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const passwordHash = await hashPassword(password)
    const account = readUsers().find(
      (savedUser) => savedUser.email === normalizedEmail && savedUser.passwordHash === passwordHash,
    )
    if (!account) {
      return { ok: false, message: 'Email address or password is incorrect.' }
    }

    const session = { name: account.name, email: account.email }
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session))
      setUser(session)
      return { ok: true }
    } catch {
      return { ok: false, message: 'Your browser could not save the sign-in session.' }
    }
  }

  const logOut = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</AuthContext.Provider>
}

