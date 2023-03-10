import { Navigate } from 'react-router-dom'
export function Protected({ isSignedIn, children }) {
  if (isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children
}

export function ProtectedHome({ isSignedIn, children }) {
    if (!isSignedIn) {
      return <Navigate to="/login" replace />
    }
    return children
}

