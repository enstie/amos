import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { FaRing, FaCalendarAlt, FaBullhorn } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: FaRing,
      title: 'Wedding Coverage',
      description: 'Complete wedding documentation from preparation to reception, capturing every precious moment of your special day with cinematic elegance.',
      features: [
        'Full day coverage (up to 12 hours)',
        'Ceremony and reception filming',
        'Professional editing with music',
        'Highlight reel (3-5 minutes)',
        'Full ceremony video',
        'Drone footage (weather permitting)',
        'Same-day highlights for social media'
      ]
    },
    {
      icon: FaCalendarAlt,
      title: 'Event Documentation',
      description: 'Professional coverage of corporate events, galas, conferences, and private celebrations with stunning visual storytelling.',
      features: [
        'Multi-camera setup',
        'Professional lighting',
        'Live streaming options',
        'Post-event highlight video',
        'Full event footage',
        'Interviews and testimonials',
        'Quick turnaround available'
      ]
    },
    {
      icon: FaBullhorn,
      title: 'Branding & Promotional',
      description: 'High-end commercial videography and photography for brands, products, and promotional campaigns that captivate audiences.',
      features: [
        'Brand story videos',
        'Product photography & videography',
        'Social media content packages',
        'Commercial advertising',
        'Corporate headshots',
        'Lifestyle and editorial shoots',
        'Content strategy consultation'
      ]
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
        <title>Services - AMOS Luxury Media</title>
        <meta name="description" content="Premium videography and photography services including weddings, events, branding, and promotional content. Custom packages available." />
      </Helmet>

      <Hero
        title="Our Services"
        subtitle="Premium packages tailored to your needs"
        imageSrc="https://via.placeholder.com/1920x1080/0e0f11/E6CF8B?text=Services+Hero"
        height="60vh"
      />

      <Section
        title="What We Offer"
        subtitle="Comprehensive videography and photography solutions for every occasion"
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <motion.div
          className="custom-quote-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="custom-quote-content">
            <h2 className="gold-gradient-text">Need a Custom Package?</h2>
            <p>
              Every project is unique. We offer custom packages tailored to your specific
              needs, budget, and vision. Let's discuss how we can bring your ideas to life.
            </p>
            <Link to="/contact" className="quote-button">
              Request a Custom Quote
            </Link>
          </div>
          <div className="custom-quote-image">
            <img
              src="https://via.placeholder.com/600x400/1a1b1e/C8A353?text=Custom+Service"
              alt="Custom service consultation"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Section>

      <Section centered>
        <motion.div
          className="process-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gold-gradient-text">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Consultation</h4>
              <p>We discuss your vision, requirements, and preferences in detail.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Planning</h4>
              <p>We create a detailed plan and timeline for your project.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Production</h4>
              <p>Our team captures your moments with precision and artistry.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Post-Production</h4>
              <p>Expert editing and color grading to perfect every detail.</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h4>Delivery</h4>
              <p>Receive your beautifully crafted final product.</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  )
}

export default Services
