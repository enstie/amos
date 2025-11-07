import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { FaVideo, FaCamera, FaAward } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: FaVideo,
      title: 'Cinematic Videography',
      description: 'Professional video production with artistic storytelling and stunning visuals.'
    },
    {
      icon: FaCamera,
      title: 'Luxury Photography',
      description: 'High-end photography capturing moments with elegance and sophistication.'
    },
    {
      icon: FaAward,
      title: 'Award-Winning Quality',
      description: 'Recognized excellence in visual storytelling and creative execution.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>AMOS - Luxury Videography & Photography</title>
        <meta name="description" content="Premium videography and photography services for weddings, events, and branding. Capturing moments, crafting memories with award-winning quality." />
      </Helmet>

      <Hero
        title="Capturing Moments, Crafting Memories"
        subtitle="Luxury videography and photography for life's most precious occasions"
        imageSrc="https://via.placeholder.com/1920x1080/0e0f11/E6CF8B?text=Luxury+Hero+Image"
      />

      <Section
        title="Why Choose AMOS"
        subtitle="Experience the perfect blend of artistry and professionalism"
        centered
      >
        <div className="features-grid">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="cta-section">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2 className="gold-gradient-text">Ready to Create Magic?</h2>
            <p>Let's turn your vision into timeless memories that will last forever.</p>
            <Link to="/contact" className="cta-button">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  )
}

export default Home
