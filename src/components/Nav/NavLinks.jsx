import { Link } from 'react-scroll'
import resume from '@assets/resume.pdf'

const NavLinks = ({ isMobile = false, isMenuOpen = false, setIsMenuOpen, className = '' }) => {
  const navLinks = [
    { text: '01. about', delay: 'delay-0' },
    { text: '02. work', delay: 'delay-100' },
    { text: '03. projects', delay: 'delay-200' },
    { text: '04. contact', delay: 'delay-300' },
  ]

  const mobileClasses = (delay, isMenuOpen) =>
    `transform transition-ease ${delay} ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`

  return (
    <ul
      className={`${isMobile ? 'flex-col' : ''} flex gap-8 items-center font-serif text-slate-100 ${className}`}
    >
      {navLinks.map(({ text, delay }) => {
        const section = text.split('. ')[1]
        return (
          <li key={text} className={isMobile ? mobileClasses(delay, isMenuOpen) : ''}>
            <Link
              to={section}
              spy
              smooth
              duration={700}
              isDynamic
              offset={section == 'home' ? -91 : -40}
              threshold={section === 'contact' ? 0.1 : 1}
              activeClass="text-accent after:scale-x-100"
              className="hover-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </Link>
          </li>
        )
      })}
      <li
        className={
          isMobile
            ? `transform transition-ease delay-[400ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`
            : ''
        }
      >
        <a
          href={resume}
          download="resume.pdf"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-accent transition-ease"
        >
          <span className="text-accent">&#123; </span>resume
          <span className="text-accent"> &#125; </span>
        </a>
      </li>
    </ul>
  )
}

export default NavLinks
