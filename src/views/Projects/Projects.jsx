import Heading from '@components/Heading'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import projects from './someProjects.js'

const Projects = () => (
  <section id="projects" className="section">
    <div className="flex flex-col justify-center gap-6 section-container">
      <motion.div
        className="pb-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Heading num={3} text="some of my projects" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
