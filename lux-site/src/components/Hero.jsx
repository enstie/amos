import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

const Hero = ({ title, subtitle, videoSrc, imageSrc, height = '100vh' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.section
      ref={ref}
      className="hero"
      style={{ height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {videoSrc && (
        <motion.video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
          loading="lazy"
          style={{ y }}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      )}
      {!videoSrc && imageSrc && (
        <motion.img
          src={imageSrc}
          alt=""
          className="hero-media"
          loading="lazy"
          style={{ y }}
        />
      )}
      
      <div className="hero-overlay" />
      
      <motion.div
        className="hero-content"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  )
}

export default Hero
