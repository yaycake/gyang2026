import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { NavProvider } from './context/nav'
import Home from './pages/Home'
import './App.css'

const Patlytics = lazy(() => import('./pages/Patlytics'))
const Viewabo = lazy(() => import('./pages/Viewabo'))
const Skyrock = lazy(() => import('./pages/Skyrock'))
const Ubisoft = lazy(() => import('./pages/Ubisoft'))
const ORM = lazy(() => import('./pages/ORM'))
const LeWagon = lazy(() => import('./pages/LeWagon'))
const Resume = lazy(() => import('./pages/Resume'))
const ThoughtsIndex = lazy(() => import('./pages/ThoughtsIndex'))
const ThoughtPost = lazy(() => import('./pages/ThoughtPost'))
const Portfolio = lazy(() => import('./pages/Portfolio'))

export default function App() {
  const location = useLocation()

  return (
    <NavProvider>
      <div key={location.pathname} className="page-inner">
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/patlytics" element={<Patlytics />} />
            <Route path="/viewabo" element={<Viewabo />} />
            <Route path="/skyrock" element={<Skyrock />} />
            <Route path="/ubisoft" element={<Ubisoft />} />
            <Route path="/orm" element={<ORM />} />
            <Route path="/lewagon" element={<LeWagon />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/thoughts" element={<ThoughtsIndex />} />
            <Route path="/thoughts/:slug" element={<ThoughtPost />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </div>
    </NavProvider>
  )
}
