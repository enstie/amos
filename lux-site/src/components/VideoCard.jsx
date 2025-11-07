import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import './VideoCard.css'

const VideoCard = ({ title, thumbnail, onPlay, index = 0 }) => {
  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="video-card-thumbnail">
        <img src={thumbnail} alt={title} loading="lazy" />
        <motion.button
          className="video-card-play"
          onClick={onPlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Play ${title}`}
        >
          <FaPlay size={24} />
        </motion.button>
      </div>
      <div className="video-card-content">
        <h4>{title}</h4>
      </div>
    </motion.div>
  )
}

export default VideoCard
