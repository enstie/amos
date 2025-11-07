import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ImageGrid.css'

const ImageGrid = ({ images, columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className={`image-grid image-grid-${columns}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-grid-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            {image.title && (
              <div className="image-grid-overlay">
                <span>{image.title}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-label="Image preview"
            aria-modal="true"
          >
            <motion.div
              className="image-lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} />
              {selectedImage.title && <p>{selectedImage.title}</p>}
              <button
                className="image-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageGrid
