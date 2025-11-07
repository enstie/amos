import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'
import VideoCard from '../components/VideoCard'
import ImageGrid from '../components/ImageGrid'
import MediaLightbox from '../components/MediaLightbox'
import { videographyPortfolio, photographyPortfolio, photographyCategories } from '../data/portfolio'
import './Portfolio.css'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('videography')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxMedia, setLightboxMedia] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openVideoLightbox = (video) => {
    setLightboxMedia({
      type: 'video',
      src: video.videoSrc,
      title: video.title,
      description: video.description
    })
    setIsLightboxOpen(true)
  }

  const getFilteredPhotos = () => {
    if (selectedCategory === 'all') {
      return [
        ...photographyPortfolio.weddings,
        ...photographyPortfolio.portraits,
        ...photographyPortfolio.events
      ]
    }
    return photographyPortfolio[selectedCategory] || []
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Portfolio - AMOS Luxury Media</title>
        <meta name="description" content="Explore our portfolio of luxury videography and photography work. View wedding films, event coverage, portraits, and commercial projects." />
      </Helmet>

      <Hero
        title="Our Portfolio"
        subtitle="A showcase of our finest work"
        imageSrc="https://via.placeholder.com/1920x1080/0e0f11/9E7A37?text=Portfolio+Hero"
        height="60vh"
      />

      <Section>
        <div className="portfolio-tabs">
          <button
            className={`portfolio-tab ${activeTab === 'videography' ? 'portfolio-tab-active' : ''}`}
            onClick={() => setActiveTab('videography')}
          >
            Videography
          </button>
          <button
            className={`portfolio-tab ${activeTab === 'photography' ? 'portfolio-tab-active' : ''}`}
            onClick={() => setActiveTab('photography')}
          >
            Photography
          </button>
        </div>

        {activeTab === 'videography' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="video-grid">
              {videographyPortfolio.map((video, index) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  onPlay={() => openVideoLightbox(video)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'photography' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="category-filters">
              {photographyCategories.map((category) => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'category-filter-active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <ImageGrid images={getFilteredPhotos()} columns={3} />
          </motion.div>
        )}
      </Section>

      <MediaLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        media={lightboxMedia}
      />
    </motion.div>
  )
}

export default Portfolio
