import { Link } from 'react-router-dom'
import Footer from '@components/Footer'
import Logo from '@components/Logo'

const NotFound = () => (
  <div className="flex flex-col min-h-screen w-full max-md:px-6 px-[52px] pt-6">
    <Link to="/">
      <Logo className="w-24" />
    </Link>
    <div className="flex flex-col flex-grow justify-center items-center gap-4">
      <h1 className="font-serif text-[200px] font-semibold text-accent leading-none">404</h1>
      <h2 className="text-slate-400 text-4xl font-semibold">Page Not Found</h2>
      <p className="text-slate-400 text-center">
        Whoops! You missed the mark on that one. Head back to the homepage.
      </p>
      <Link to="/">
        <div className="font-serif text-xl text-slate-400 hover:text-accent transition-ease">
          <span className="text-accent">&#123; </span>homepage
          <span className="text-accent"> &#125; </span>
        </div>
      </Link>
    </div>
    <Footer />
  </div>
)

export default NotFound
