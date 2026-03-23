import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavContext = createContext(null)

export function NavProvider({ children }) {
  const navigate = useNavigate()
  const [exiting, setExiting] = useState(false)

  const navTo = (path) => {
    setExiting(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
      setExiting(false)
      navigate(path)
    }, 260)
  }

  return (
    <NavContext.Provider value={navTo}>
      <div className={exiting ? 'page-exiting' : ''}>
        {children}
      </div>
    </NavContext.Provider>
  )
}

export const useNavTo = () => useContext(NavContext)
