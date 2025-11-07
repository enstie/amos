import { motion } from 'framer-motion'
import './Section.css'

const Section = ({ 
  children, 
  title, 
  subtitle, 
  centered = false, 
  dark = false,
  className = ''
}) => {
  return (
    <section className={`section ${dark ? 'section-dark' : ''} ${className}`}>
      <div className="container">
        {title && (
          <motion.div
            className={`section-header ${centered ? 'section-header-centered' : ''}`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gold-gradient-text">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
