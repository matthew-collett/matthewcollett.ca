import Heading from '@components/Heading'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import projects from './someProjects.js'

const Projects = () => (
  <section id="projects" className="w-full py-20 max-md:py-8 flex justify-center">
    <div className="flex flex-col justify-center section-res gap-6">
      <motion.div
        className="pb-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Heading num={3} text="some of my projects" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="h-full"
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
