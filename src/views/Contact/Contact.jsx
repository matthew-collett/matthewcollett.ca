import Heading from '@components/Heading'
import { motion } from 'framer-motion'
import SocialCard from './SocialCard.jsx'
import socials from './socials.js'

const Contact = () => (
  <motion.section
    name="contact"
    className="w-full py-20 max-md:py-8 pb-[180px] flex justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col justify-center items-center section-res gap-6">
      <Heading num={4} text={"let's connect"} className="text-center" />
      <p className="text-center max-w-2xl">
        Whether you have a project in mind or just want to chat, I&apos;m always open to new ideas
        and connections. Check out my GitHub or reach out via email or LinkedIn!
      </p>
      <div className="flex items-center gap-2 text-slate-400">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available for new opportunities
      </div>
      <motion.div
        className="flex max-lg:flex-col w-full justify-center items-center gap-4"
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
