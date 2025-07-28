// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile' 
import Team from './pages/Team'       
import Rank from './pages/Rank'       
import Schedule from './pages/Schedule'
import Review from './pages/Review'
import History from './pages/History'
import Settings from './pages/Settings'
import AdminUser from './pages/AdminUser'
import AdminField from './pages/AdminField'
import Report from './pages/Report'
import Pricing from './pages/Pricing'
import Ads from './pages/Ads'
import FAQ from './pages/FAQ'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/review" element={<Review />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/fields" element={<AdminField />} />
          <Route path="/report" element={<Report />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
