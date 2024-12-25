import Footer from '@components/Footer'
import Nav from '@components/Nav'

const AppLayout = ({ children }) => (
  <div className="min-h-svh bg-primary text-slate-400 font-sans overflow-x-hidden">
    <Nav />
    <main className="flex flex-col">{children}</main>
    <Footer />
  </div>
)
export default AppLayout
