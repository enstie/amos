import { motion } from 'framer-motion'
import './ServiceCard.css'

const ServiceCard = ({ icon: Icon, title, description, features, index = 0 }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-gold)' }}
    >
      {Icon && (
        <div className="service-card-icon">
          <Icon size={48} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {features && features.length > 0 && (
        <ul className="service-card-features">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default ServiceCard
