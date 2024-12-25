import { X, Menu } from 'lucide-react'

const MenuButton = ({ setIsMenuOpen, isMenuOpen, className = '' }) => (
  <button
    className={`text-accent transform transition-ease ${className}`}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <div className={`transform transition-ease ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </div>
  </button>
)

export default MenuButton
