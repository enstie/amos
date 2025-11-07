import { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
