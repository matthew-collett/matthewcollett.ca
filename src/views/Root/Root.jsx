import { ErrorBoundary } from 'react-error-boundary'
import GenericError from '@components/GenericError'
import AppLayout from '@layouts/AppLayout'
import About from '@views/About'
import Contact from '@views/Contact'
import Home from '@views/Home'
import Projects from '@views/Projects'
import Work from '@views/Work'

const Root = () => (
  <ErrorBoundary FallbackComponent={GenericError} onReset={() => window.location.reload()}>
    <AppLayout>
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
    </AppLayout>
  </ErrorBoundary>
)

export default Root
