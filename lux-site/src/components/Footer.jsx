import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaYoutube, FaVimeoV, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  const serviceLinks = [
    { to: '/services', label: 'Videography' },
    { to: '/services', label: 'Photography' },
    { to: '/services', label: 'Events' },
    { to: '/services', label: 'Brand Shoots' },
  ]

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-column footer-brand">
          <h3 className="gold-gradient-text footer-logo">Pixillab</h3>
          <p className="footer-tagline">
            Capturing moments and crafting memories with luxury-grade videography & photography.
          </p>
          <div className="footer-contact-mini">
            <p><FaEnvelope /> hello@pixillab.com</p>
            <p><FaPhone /> +1 (555) 123-4567</p>
            <p><FaMapMarkerAlt /> Manhattan, NY</p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul className="footer-list">
            {quickLinks.map(link => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-list">
            {serviceLinks.map(link => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Stay Updated</h4>
          <p className="footer-newsletter-text">
            Join our private client list for project insights & luxury production tips.
          </p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              required
            />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              <FaVimeoV />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" role="presentation" />

      <div className="footer-bottom container">
        <p>&copy; {currentYear} Pixillab. All rights reserved.</p>
        <ul className="footer-legal">
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="/contact">Hire Us</Link></li>
        </ul>
      </div>
    </footer>
}

export default Footer