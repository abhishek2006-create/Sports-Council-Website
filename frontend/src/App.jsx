import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Events from './pages/Events'
import Team from './pages/Team'

import Gallery from './pages/Gallery'
import Contact from './pages/contact'
import Footer from './components/Footer'
import { DisplayProvider } from './context/DisplayContext'
import ClubDetail from './pages/ClubDetail'
import EventDetail from './pages/EventDetail'
import Staff from './pages/Staff'
import ClubsGallery from './pages/ClubAndSocities'
import Feedback from './pages/feedback'
import Fest from "./pages/Fest";
import Josh from './pages/josh';
import GC from './pages/gc';
import Shaurya from './pages/shaurya';
import Facilities from "./pages/Facilities";


function App() {
  return (
    <>
      <div className='max-w-screen h-screen font-poppins'>
        <Router>
          <DisplayProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path="/events" element={<Events />} />

<Route path="/events/josh" element={<Josh />} />
<Route path="/events/gc" element={<GC />} />
<Route path="/events/shaurya" element={<Shaurya />} />

<Route path="/events/:id" element={<EventDetail />} />
              <Route path='/team' element={<Team />} />
              <Route path='/staff' element={<Staff />} />
              <Route path='/clubs' element={<ClubsGallery />} />
              <Route path="/clubs/:clubname" element={<ClubDetail />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/feedback' element={<Feedback />} />
              <Route path="/fest" element={<Fest />} />
              <Route path="/facilities" element={<Facilities />} />
            </Routes>
            <Footer />
          </DisplayProvider>
        </Router>
      </div>
    </>
  )
}

export default App

