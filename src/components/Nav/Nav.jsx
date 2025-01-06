import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Footer from '@components/Footer'
import Logo from '@components/Logo'
import { ChevronUp } from 'lucide-react'
import MenuButton from './MenuButton'
import NavLinks from './NavLinks'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollNav, setShowScrollNav] = useState(false)
  const [showBackToTop, setBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollNav(window.scrollY >= 150)
      setBackToTop(window.scrollY >= 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  return (
    <>
      <header className="w-full p-4 sm:p-6 lg:p-8">
        <div className="flex w-full justify-between items-center">
          <Link
            to="home"
            spy
            smooth
            duration={700}
            offset={-91}
            isDynamic
            activeClass="text-accent after:scale-x-100"
          >
            <Logo className="w-24 cursor-pointer" />
          </Link>
          <div className="hidden md:flex items-center">
            <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} className="md:hidden" />
        </div>

        <div
          className={`flex flex-col gap-8 md:hidden fixed inset-0 top-[56px] bg-primary z-50 transition-ease px-4 py-8
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
        >
          <NavLinks
            isMobile
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className="py-4"
          />
          <Footer />
        </div>
      </header>

      <nav
        className={`fixed drop-shadow-md top-0 left-0 right-0 z-50 px-6 py-4 max-md:py-3 bg-slate-900/90 backdrop-blur-sm transition-ease transform ${
          showScrollNav
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="md:hidden flex w-full justify-between items-center">
          <Link to="home" smooth duration={500}>
            <Logo className="w-20 cursor-pointer" />
          </Link>
          <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>
        <div className="hidden md:flex w-full justify-center items-center">
          <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
      <Link
        to="home"
        spy
        smooth
        duration={700}
        offset={-91}
        isDynamic
        activeClass="text-accent after:scale-x-100"
        className={`z-40 bg-slate-700 rounded-full shadow-md fixed bottom-8 right-8 p-3 hover:cursor-pointer hover:scale-105 transition-ease ${
          showBackToTop ? 'opacity-80' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp size={32} color={'var(--color-accent)'} />
      </Link>
    </>
  )
}

export default Nav
