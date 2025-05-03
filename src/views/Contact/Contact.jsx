import Heading from '@components/Heading'
import { motion } from 'framer-motion'
import EmploymentStatus from './EmploymentStatus.jsx'
import SocialCard from './SocialCard.jsx'
import socials from './socials.js'

const Contact = () => (
  <motion.section
    id="contact"
    className="section flex justify-center min-h-[calc(100vh-100px)]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col justify-center items-center gap-6 section-container">
      <Heading num={4} text="let's connect" className="text-center" />
      <p className="text-center max-w-2xl">
        Check out my GitHub or reach out via email or LinkedIn!
      </p>
      <EmploymentStatus employed />
      <motion.div
        className="grid max-lg:grid-cols-1 grid-cols-3 w-full h-full place-items-start gap-8 mt-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {socials.map((social, i) => (
          <SocialCard key={i} social={social} />
        ))}
      </motion.div>
    </div>
  </motion.section>
)

export default Contact
