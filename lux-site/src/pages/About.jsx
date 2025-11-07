import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { FaTrophy, FaCertificate, FaHeart } from 'react-icons/fa'
import './About.css'

const About = () => {
  const achievements = [
    { icon: FaTrophy, label: '50+ Awards', description: 'Industry recognition' },
    { icon: FaCertificate, label: 'Certified Pro', description: 'Professional credentials' },
    { icon: FaHeart, label: '500+ Happy Clients', description: 'Satisfied customers' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us - Pixillab</title>
        <meta name="description" content="Learn about Pixillab - award-winning luxury videography and photography studio with over 50 industry awards and 500+ satisfied clients." />
      </Helmet>

      <Hero
        title="Our Story"
        subtitle="Passionate about capturing life's beautiful moments"
        imageSrc="https://via.placeholder.com/1920x1080/0e0f11/C8A353?text=About+Hero"
        height="70vh"
      />

      <Section
        title="About Pixillab"
        subtitle="Where artistry meets excellence"
      >
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Pixillab was founded with a singular vision: to elevate videography and photography
              into an art form that transcends traditional documentation. With over a decade
              of experience, we've perfected the craft of visual storytelling.
            </p>
            <p>
              Our team of award-winning professionals brings together technical expertise,
              artistic vision, and a deep understanding of what makes each moment unique.
              We don't just capture images and videos – we create timeless memories that
              evoke emotion and tell compelling stories.
            </p>
            <p>
              From intimate weddings to grand corporate events, from personal portraits to
              commercial campaigns, we approach every project with the same level of dedication,
              creativity, and attention to detail that has earned us recognition across the industry.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://via.placeholder.com/600x800/1a1b1e/E6CF8B?text=About+Image"
              alt="Pixillab team at work"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      <Section dark centered title="Our Achievements">
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <achievement.icon size={48} className="achievement-icon" />
              <h3 className="gold-gradient-text">{achievement.label}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Our Philosophy">
        <motion.div
          className="philosophy-content"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="philosophy-quote">
            "Every moment is a story waiting to be told. Our mission is to preserve these
            stories with the elegance, emotion, and artistry they deserve. We believe that
            luxury isn't just about expensive equipment or grand venues – it's about the
            thoughtfulness, care, and passion we pour into every frame we capture."
          </blockquote>
          <p className="philosophy-signature">— The Pixillab Team</p>
        </motion.div>
      </Section>
    </motion.div>
  )
}

export default About
