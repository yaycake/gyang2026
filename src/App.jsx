import { Routes, Route, useLocation } from 'react-router-dom'
import { NavProvider } from './context/nav'
import Home from './pages/Home'
import Patlytics from './pages/Patlytics'
import Viewabo from './pages/Viewabo'
import Skyrock from './pages/Skyrock'
import Ubisoft from './pages/Ubisoft'
import ORM from './pages/ORM'
import LeWagon from './pages/LeWagon'
import Resume from './pages/Resume'
import ThoughtsIndex from './pages/ThoughtsIndex'
import ThoughtPost from './pages/ThoughtPost'
import './App.css'

export default function App() {
  const location = useLocation()

  return (
    <NavProvider>
      <div key={location.pathname} className="page-inner">
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
        </Routes>
      </div>
    </NavProvider>
  )
}
