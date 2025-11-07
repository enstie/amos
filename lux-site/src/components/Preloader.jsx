import { motion } from 'framer-motion'
import './Preloader.css'

const Preloader = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-label="Loading"
    >
      <motion.div
        className="preloader-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="logo-text gold-gradient-text"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          AMOS
        </motion.div>
        <motion.div
          className="logo-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Luxury Media
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
