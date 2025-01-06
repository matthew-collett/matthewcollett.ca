import TechPill from '@components/TechPill'
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }) => (
  <div className="flex flex-col shadow-lg rounded-md bg-secondary hover:scale-[1.02] transition-ease items-center justify-between h-full">
    <div>
      <div
        className={`w-full h-44 rounded-t-md ${project.imageType === 'logo' ? 'flex items-center justify-center bg-secondary p-6' : ''}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`${project.imageType === 'logo' ? 'max-w-full max-h-full w-auto h-auto p-4' : 'w-full h-full object-cover'} rounded-t-md`}
        />
      </div>
      <div className="flex flex-col p-8 gap-2">
        <h3 className="text-lg font-semibold text-slate-200">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techs.map((tech, i) => (
            <TechPill key={i}>{tech}</TechPill>
          ))}
        </div>
      </div>
    </div>
    <div className="flex gap-4 p-8 w-full pt-0">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-accent transition-ease font-serif"
      >
        <Github size={20} />
        <span>Code</span>
      </a>

      {project.extra &&
        (project.extra.link ? (
          <a
            href={project.extra.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-ease font-serif"
          >
            <ExternalLink size={20} />
            <span>{project.extra.title}</span>
          </a>
        ) : (
          <span className="flex items-center gap-2 hover:text-accent transition-ease font-serif text-accent">
            <span>{project.extra.title}</span>
          </span>
        ))}
    </div>
  </div>
)

export default ProjectCard
