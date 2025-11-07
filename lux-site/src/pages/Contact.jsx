import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Use Formspree if FORMSPREE_ENDPOINT is set, otherwise Netlify forms
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    
    if (formspreeEndpoint) {
      // Formspree submission
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        
        if (response.ok) {
          setSubmitted(true)
          setFormData({ name: '', email: '', phone: '', message: '' })
        }
      } catch (error) {
        console.error('Form submission error:', error)
      }
    } else {
      // Netlify forms fallback (form already has data-netlify="true" attribute)
      setSubmitted(true)
      // Form will be submitted naturally to Netlify
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us - AMOS Luxury Media</title>
        <meta name="description" content="Get in touch with AMOS for luxury videography and photography services. Request a quote or schedule a consultation today." />
      </Helmet>

      <Hero
        title="Let's Create Together"
        subtitle="Ready to capture your special moments?"
        imageSrc="https://via.placeholder.com/1920x1080/0e0f11/9E7A37?text=Contact+Hero"
        height="60vh"
      />

      <Section>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gold-gradient-text">Get In Touch</h2>
            <p>
              We'd love to hear about your project. Reach out to us and let's start
              creating something beautiful together.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-detail">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@amosluxury.com">hello@amosluxury.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>123 Luxury Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="form-success">
                <h3 className="gold-gradient-text">Thank You!</h3>
                <p>Your message has been received. We'll get back to you soon!</p>
                <button
                  className="form-button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>

      <Section dark>
        <motion.div
          className="map-container"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="gold-gradient-text">Visit Our Studio</h3>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMOS Luxury Media Location"
            />
          </div>
        </motion.div>
      </Section>
    </motion.div>
  )
}

export default Contact
