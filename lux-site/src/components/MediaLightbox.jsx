import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import './MediaLightbox.css'

const MediaLightbox = ({ isOpen, onClose, media }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!media) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="media-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-label="Media viewer"
          aria-modal="true"
        >
          <motion.div
            className="media-lightbox-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="media-lightbox-close"
              onClick={onClose}
              aria-label="Close media viewer"
            >
              <HiX size={28} />
            </button>

            {media.type === 'video' ? (
              <video
                src={media.src}
                controls
                autoPlay
                className="media-lightbox-video"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.title || 'Media content'}
                className="media-lightbox-image"
              />
            )}

            {media.title && (
              <div className="media-lightbox-info">
                <h3>{media.title}</h3>
                {media.description && <p>{media.description}</p>}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MediaLightbox
