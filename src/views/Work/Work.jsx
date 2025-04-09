import { useState } from 'react'
import Heading from '@components/Heading'
import TechPill from '@components/TechPill'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experiences } from './experiences'

const Work = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(experiences)[0])
  const [isTabChanging, setisTabChanging] = useState(false)

  const handleTabChange = tab => {
    setisTabChanging(true)
    setTimeout(() => {
      setActiveTab(tab)
      setisTabChanging(false)
    }, 300)
  }

  return (
    <section id="work" className="section">
      <div className="section-container">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Heading num={2} text={'work experience'} />
        </motion.div>
        <div className="h-[1px] my-4 bg-slate-500" />
        <motion.div
          className="lg:grid lg:grid-cols-[max-content,1fr] gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative max-lg:pb-6">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible whitespace-nowrap lg:whitespace-normal">
              {Object.entries(experiences).map(([key, exp]) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`font-serif p-4 max-lg:p-3 text-sm text-left min-w-max
                    lg:border-l-2 border-b-2 lg:border-b-0
                    hover:bg-slate-800/50 transition-ease
                    ${
                      activeTab === key
                        ? 'lg:border-l-accent border-b-accent lg:border-b-0 text-accent bg-slate-800/50'
                        : 'lg:border-l-slate-500 border-b-slate-500 lg:border-b-0'
                    }
                  `}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          <div
            key={activeTab}
            className={`min-w-0 transition-ease ${isTabChanging ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="text-xl max-md:text-lg font-semibold text-slate-200">
              {experiences[activeTab].role}
              <span className="text-accent">
                &nbsp;@&nbsp;
                <a
                  href={experiences[activeTab].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  {experiences[activeTab].company}
                </a>
              </span>
            </div>

            <div className="flex items-center justify-start gap-2 pt-1">
              <MapPin size={14} />
              <p className="text-slate-400">{experiences[activeTab].location}</p>
            </div>
            <p className="text-slate-400 pt-1 pb-4">{experiences[activeTab].date}</p>

            <ul className="space-y-4">
              {experiences[activeTab].points.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-accent flex-shrink-0">&bull;</span>
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 py-6">
              {experiences[activeTab].techs.map(tech => (
                <TechPill key={tech}>{tech}</TechPill>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
